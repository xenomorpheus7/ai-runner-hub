import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number;
  r: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number;
  phase: number;
};

function createNodes(w: number, h: number, count: number): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < count; i++) {
    const z = 0.15 + Math.random() * 0.85;
    const speed = 0.04 + Math.random() * 0.12;
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * speed * (0.6 + z),
      vy: (Math.random() - 0.5) * speed * (0.6 + z),
      z,
      r: 0.9 + z * 2.2,
    });
  }
  return nodes;
}

function createParticles(w: number, h: number, count: number): Particle[] {
  const parts: Particle[] = [];
  for (let i = 0; i < count; i++) {
    parts.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.06,
      vy: (Math.random() - 0.5) * 0.06,
      z: Math.random(),
      phase: Math.random() * Math.PI * 2,
    });
  }
  return parts;
}

function wrapNode(n: Node, w: number, h: number) {
  if (n.x < -80) n.x = w + 50;
  if (n.x > w + 80) n.x = -50;
  if (n.y < -80) n.y = h + 50;
  if (n.y > h + 80) n.y = -50;
}

const NeuralNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let nodes: Node[] = [];
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let linkDist = 130;
    let raf = 0;
    let time = 0;
    let isScrolling = false;
    let scrollTimer: ReturnType<typeof setTimeout> | undefined;
    let lastFrameTime = performance.now();

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Pre-render a reusable node sprite to avoid allocating radial gradients in the animation loop
    const spriteCanvas = document.createElement("canvas");
    const spriteSize = 48;
    spriteCanvas.width = spriteSize;
    spriteCanvas.height = spriteSize;
    const spriteCtx = spriteCanvas.getContext("2d");
    if (spriteCtx) {
      const center = spriteSize / 2;
      const grad = spriteCtx.createRadialGradient(
        center,
        center,
        0,
        center,
        center,
        center
      );
      grad.addColorStop(0, "rgba(225, 235, 255, 0.95)");
      grad.addColorStop(0.18, "rgba(160, 140, 255, 0.55)");
      grad.addColorStop(0.45, "rgba(100, 130, 255, 0.2)");
      grad.addColorStop(1, "rgba(50, 40, 120, 0)");
      spriteCtx.fillStyle = grad;
      spriteCtx.beginPath();
      spriteCtx.arc(center, center, center, 0, Math.PI * 2);
      spriteCtx.fill();
    }

    const resize = () => {
      // Cap DPR to 1.25 for balanced sharpness and smooth 60/120fps fill rate
      const dpr = Math.min(window.devicePixelRatio ?? 1, 1.25);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const density = Math.sqrt(area / (1920 * 1080));
      const nCount = Math.round(32 + density * 18);
      const pCount = Math.round(20 + density * 14);
      linkDist = Math.min(145, 90 + density * 40);

      nodes = createNodes(width, height, nCount);
      particles = createParticles(width, height, pCount);
    };

    resize();

    const onScroll = () => {
      isScrolling = true;
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isScrolling = false;
      }, 90);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const step = (now: number) => {
      // Throttle canvas RAF when user is actively scrolling to reserve maximum GPU/CPU bandwidth
      if (isScrolling && now - lastFrameTime < 33) {
        raf = requestAnimationFrame(step);
        return;
      }
      lastFrameTime = now;
      time += 0.016;

      ctx.fillStyle = "rgba(5, 8, 18, 0.24)";
      ctx.fillRect(0, 0, width, height);

      const w = width;
      const h = height;

      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const flow =
          0.016 *
          (0.5 + n.z) *
          Math.sin(time * 0.35 + n.x * 0.002 + n.z * 2);
        n.x += n.vx + flow * 0.35;
        n.y += n.vy - flow * 0.2;
        wrapNode(n, w, h);
      }

      // Group and batch link drawing to eliminate hundreds of draw calls and gradient allocations
      // Tier 1: strong connections, Tier 2: subtle connections
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy);
          if (d >= linkDist || d < 1) continue;

          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
        }
      }
      ctx.strokeStyle = "rgba(130, 160, 255, 0.14)";
      ctx.lineWidth = 0.9;
      ctx.stroke();

      // Draw nodes using pre-rendered cached sprite for hardware blitting
      const halfSize = spriteSize / 2;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const scale = (n.r * 2.8) / spriteSize;
        const drawDim = spriteSize * scale;
        ctx.drawImage(
          spriteCanvas,
          n.x - drawDim / 2,
          n.y - drawDim / 2,
          drawDim,
          drawDim
        );
      }

      // Draw ambient dust particles in a single batched path
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.phase += 0.02;
        p.x += p.vx + Math.sin(p.phase + p.y * 0.01) * 0.03;
        p.y += p.vy + Math.cos(p.phase * 0.8) * 0.02;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.moveTo(p.x + 1, p.y);
        ctx.arc(p.x, p.y, 0.8 + p.z * 0.6, 0, Math.PI * 2);
      }
      ctx.fillStyle = "rgba(190, 210, 255, 0.22)";
      ctx.fill();

      if (!reduced) raf = requestAnimationFrame(step);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy);
          if (d >= linkDist || d < 1) continue;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
        }
      }
      ctx.strokeStyle = "rgba(130, 160, 255, 0.14)";
      ctx.lineWidth = 0.9;
      ctx.stroke();

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const scale = (n.r * 2.8) / spriteSize;
        const drawDim = spriteSize * scale;
        ctx.drawImage(
          spriteCanvas,
          n.x - drawDim / 2,
          n.y - drawDim / 2,
          drawDim,
          drawDim
        );
      }
    };

    if (reduced) {
      drawStatic();
      const onResizeReduced = () => {
        resize();
        drawStatic();
      };
      window.addEventListener("resize", onResizeReduced);
      return () => {
        window.removeEventListener("resize", onResizeReduced);
      };
    }

    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        contain: "strict",
        transform: "translateZ(0)",
      }}
      aria-hidden
    >
      <div className="neural-scene-base absolute inset-0" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-[0.92]"
        style={{
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      />
      <div className="neural-scene-vignette absolute inset-0" />
      <div className="neural-scene-depth absolute inset-0" />
    </div>
  );
};

export default NeuralNetworkBackground;
