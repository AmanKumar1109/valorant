import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ClubsGrid } from "@/components/clubs-grid";
import { EventPool } from "@/components/event-pool";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base text-text-primary">
      <Navbar />
      <Hero />
      <ClubsGrid />
      <EventPool />
      <Footer />
    </main>
  );
}
