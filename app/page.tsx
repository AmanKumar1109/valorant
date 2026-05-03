import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LatestArticles } from "@/components/latest-articles";
import { FeatureBanner } from "@/components/feature-banner";
import { WeAreValorant } from "@/components/we-are-valorant";
import { AgentsSection } from "@/components/agents-section";
import { MapSection } from "@/components/map-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1923]">
      <Navbar />
      <Hero />
      <LatestArticles />
      <FeatureBanner />
      <WeAreValorant />
      <AgentsSection />
      <MapSection />
      <Footer />
    </main>
  );
}
