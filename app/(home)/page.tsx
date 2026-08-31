import "@/components/home/styles/home.css";

import { AboutSection } from "@/components/home/AboutSection";
import { DesignPhilosophy } from "@/components/home/DesignPhilosophy";
import { FooterCTA } from "@/components/home/FooterCTA";
import { Hero } from "@/components/home/Hero";
import { ThinkingFramework } from "@/components/home/ThinkingFramework";
import { TransformationList } from "@/components/home/TransformationList";

export default function HomePage() {
  return (
    <main className="home">
      <Hero />
      <DesignPhilosophy />
      <TransformationList />
      <ThinkingFramework />
      <AboutSection />
      <FooterCTA />
    </main>
  );
}
