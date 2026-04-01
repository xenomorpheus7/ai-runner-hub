import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 napaka: uporabnik je poskusil dostopati do neobstoječe poti:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative isolate flex min-h-screen items-center justify-center bg-background text-foreground">
      <NeuralNetworkBackground />
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Stran ni bila najdena</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Nazaj na domov
        </a>
      </div>
    </div>
  );
};

export default NotFound;
