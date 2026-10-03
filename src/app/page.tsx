import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Pillars from "@/components/Pillars";
import AgenticAI from "@/components/AgenticAI";
import ProjectsPreview from "@/components/ProjectsPreview";
import TeamSection from "@/components/TeamSection";
import JoinCta from "@/components/JoinCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Pillars />
      <AgenticAI />
      <ProjectsPreview />
      <TeamSection />
      <JoinCta />
    </>
  );
}