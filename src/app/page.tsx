import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main className="py-5">
      <Header />
      <Hero />
      <Integrations />
      <Features />
      <Metrics />
      <Subscribe />
      <Footer />
    </main>
  );
}
