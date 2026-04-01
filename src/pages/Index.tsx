import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Research from "@/components/Research";
import Team from "@/components/Team";
import Activities from "@/components/Activities";
import DiscoverAIRunner from "@/components/DiscoverAIRunner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

const Index = () => {
  return (
    <div className="relative isolate min-h-screen bg-background text-foreground overflow-x-hidden">
      <NeuralNetworkBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Mission />
          <Research />
          <Activities />
          <Team />
          <DiscoverAIRunner />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
