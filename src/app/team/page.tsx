import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = { title: "Team | PAIB" };

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="TEAM"
        title={
          <>
            The people <span className="text-gold">behind PAIB</span>.
          </>
        }
        text="Leaders, trainers and builders working to bring AI and blockchain to Pakistan."
      />
      <TeamSection />
    </>
  );
}