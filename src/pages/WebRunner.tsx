import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";
import WebRunnerHero from "@/components/webrunner/WebRunnerHero";
import WebRunnerStack from "@/components/webrunner/WebRunnerStack";
import WebRunnerProcess from "@/components/webrunner/WebRunnerProcess";
import WebRunnerMetrics from "@/components/webrunner/WebRunnerMetrics";
import WebRunnerFAQ from "@/components/webrunner/WebRunnerFAQ";
import WebRunnerContact from "@/components/webrunner/WebRunnerContact";
import WebRunnerHeader from "@/components/webrunner/WebRunnerHeader";
import WebRunnerFooter from "@/components/webrunner/WebRunnerFooter";

const WebRunner = () => {
  return (
    <div className="relative isolate min-h-screen bg-background text-foreground overflow-x-hidden">
      <NeuralNetworkBackground />
      <div className="relative z-10">
        <WebRunnerHeader />
        <main>
          <WebRunnerHero />
          <WebRunnerStack />
          <WebRunnerProcess />
          <WebRunnerMetrics />
          <WebRunnerFAQ />
          <WebRunnerContact />
        </main>
        <WebRunnerFooter />
      </div>
    </div>
  );
};

export default WebRunner;

