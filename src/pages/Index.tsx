import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Research from "@/components/Research";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Activities from "@/components/Activities";
import DiscoverAIRunner from "@/components/DiscoverAIRunner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Research />
        <Partners />
        <Activities />
        <Team />
        <DiscoverAIRunner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
