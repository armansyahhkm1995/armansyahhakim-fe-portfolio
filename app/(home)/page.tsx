import "@/components/home/styles/home.css";

import { AboutSection } from "@/components/home/AboutSection";
import { FooterCTA } from "@/components/home/FooterCTA";
import { HeaderNav } from "@/components/home/HeaderNav";
import { Hero } from "@/components/home/Hero";
import { ThinkingFramework } from "@/components/home/ThinkingFramework";
import { TransformationList } from "@/components/home/TransformationList";
import { ValueBridge } from "@/components/home/ValueBridge";

export default function HomePage() {
  return (
    <div className="home">
      <HeaderNav />
      <Hero />
      <ValueBridge />
      <TransformationList />
      <ThinkingFramework />
      <AboutSection />
      <FooterCTA />
    </div>
  );
}
