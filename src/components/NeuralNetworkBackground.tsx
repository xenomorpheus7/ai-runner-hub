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
    let linkDist = 140;
    let raf = 0;
    let time = 0;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const density = Math.sqrt(area / (1920 * 1080));
      const nCount = Math.round(38 + density * 22);
      const pCount = Math.round(28 + density * 18);
      linkDist = Math.min(160, 95 + density * 45);

      nodes = createNodes(width, height, nCount);
      particles = createParticles(width, height, pCount);
    };

    resize();

    const step = () => {
      if (!ctx) return;
      time += 0.016;

      ctx.fillStyle = "rgba(5, 8, 18, 0.22)";
      ctx.fillRect(0, 0, width, height);

      const w = width;
      const h = height;

      for (const n of nodes) {
        const flow =
          0.018 *
          (0.5 + n.z) *
          Math.sin(time * 0.35 + n.x * 0.002 + n.z * 2);
        n.x += n.vx + flow * 0.4;
        n.y += n.vy - flow * 0.25;
        wrapNode(n, w, h);
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy);
          if (d >= linkDist || d < 1) continue;

          const t = 1 - d / linkDist;
          const z = (a.z + b.z) * 0.5;
          const pulse = 0.92 + 0.08 * Math.sin(time * 0.8 + d * 0.04);
          const alpha = t * t * (0.06 + z * 0.1) * pulse;

          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(100, 160, 255, ${alpha})`);
          grad.addColorStop(
            0.5,
            `rgba(150, 120, 255, ${alpha * 0.95})`,
          );
          grad.addColorStop(1, `rgba(180, 140, 255, ${alpha * 0.85})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = (0.35 + z * 1.15) * (0.55 + t * 0.45);
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);

          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          const ox =
            Math.sin(time * 0.45 + i * 0.2) * 12 * t * z +
            (dy * 0.08 * t);
          const oy =
            Math.cos(time * 0.5 + j * 0.15) * 12 * t * z -
            (dx * 0.08 * t);
          ctx.quadraticCurveTo(mx + ox, my + oy, b.x, b.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        const core = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
        const a0 = 0.45 + n.z * 0.35;
        const a1 = 0.2 * n.z;
        core.addColorStop(0, `rgba(210, 225, 255, ${a0})`);
        core.addColorStop(0.25, `rgba(140, 120, 255, ${a1})`);
        core.addColorStop(0.55, `rgba(100, 80, 200, ${a1 * 0.35})`);
        core.addColorStop(1, "rgba(40, 30, 80, 0)");
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 5.5, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const p of particles) {
        p.phase += 0.02;
        p.x += p.vx + Math.sin(p.phase + p.y * 0.01) * 0.03;
        p.y += p.vy + Math.cos(p.phase * 0.8) * 0.02;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const pa = (0.04 + p.z * 0.08) * (0.85 + 0.15 * Math.sin(p.phase));
        ctx.fillStyle = `rgba(200, 210, 255, ${pa})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.55 + p.z * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) raf = requestAnimationFrame(step);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      const w = width;
      const h = height;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy);
          if (d >= linkDist || d < 1) continue;
          const t = 1 - d / linkDist;
          const z = (a.z + b.z) * 0.5;
          const alpha = t * t * (0.06 + z * 0.1);
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(100, 160, 255, ${alpha})`);
          grad.addColorStop(0.5, `rgba(150, 120, 255, ${alpha * 0.95})`);
          grad.addColorStop(1, `rgba(180, 140, 255, ${alpha * 0.85})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = (0.35 + z * 1.15) * (0.55 + t * 0.45);
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      for (const n of nodes) {
        const core = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
        const a0 = 0.45 + n.z * 0.35;
        const a1 = 0.2 * n.z;
        core.addColorStop(0, `rgba(210, 225, 255, ${a0})`);
        core.addColorStop(0.25, `rgba(140, 120, 255, ${a1})`);
        core.addColorStop(0.55, `rgba(100, 80, 200, ${a1 * 0.35})`);
        core.addColorStop(1, "rgba(40, 30, 80, 0)");
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 5.5, 0, Math.PI * 2);
        ctx.fill();
      }
      for (const p of particles) {
        const pa = (0.04 + p.z * 0.08) * 0.9;
        ctx.fillStyle = `rgba(200, 210, 255, ${pa})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.55 + p.z * 0.8, 0, Math.PI * 2);
        ctx.fill();
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
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="neural-scene-base absolute inset-0" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-[0.92] contrast-[1.02]"
        style={{ filter: "blur(0.65px)" }}
      />
      <div className="neural-scene-vignette absolute inset-0" />
      <div className="neural-scene-depth absolute inset-0" />
    </div>
  );
};

export default NeuralNetworkBackground;
