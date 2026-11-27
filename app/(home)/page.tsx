import "@/components/home/styles/home.css";

import { AboutSection } from "@/components/home/AboutSection";
import { FooterCTA } from "@/components/home/FooterCTA";
import { HeaderNav } from "@/components/home/HeaderNav";
import { Hero } from "@/components/home/Hero";
import { TransformationList } from "@/components/home/TransformationList";

export default function HomePage() {
  return (
    <div className="home">
      <HeaderNav />
      <Hero />
      <TransformationList />
      <AboutSection />
      <FooterCTA />
    </div>
  );
}
