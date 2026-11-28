import "@/components/home/styles/home.css";

import { AboutSection } from "@/components/home/AboutSection";
import { FooterCTA } from "@/components/home/FooterCTA";
import { HeaderNav } from "@/components/home/HeaderNav";
import { Hero } from "@/components/home/Hero";
import { MediumArticlesSection } from "@/components/home/MediumArticlesSection";
import { TransformationList } from "@/components/home/TransformationList";
import { getMediumArticles } from "@/content/medium";

export const revalidate = 3600;

export default async function HomePage() {
  const articles = await getMediumArticles(6);

  return (
    <div className="home">
      <HeaderNav />
      <Hero />
      <TransformationList />
      <MediumArticlesSection articles={articles} />
      <AboutSection />
      <FooterCTA />
    </div>
  );
}
