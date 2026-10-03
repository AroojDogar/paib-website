import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamSection from "@/components/TeamSection";
import { T } from "@/lib/lang";

export const metadata: Metadata = { title: "Team | PAIB" };

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow={<T en="TEAM" ur="ٹیم" />}
        title={
          <T
            en={
              <>
                The people <span className="text-gold">behind PAIB</span>.
              </>
            }
            ur={
              <>
                <span className="text-gold">PAIB کے پیچھے</span> کام کرنے والے لوگ۔
              </>
            }
          />
        }
        text={
          <T
            en="Leaders, trainers and builders working to bring AI and blockchain to Pakistan."
            ur="قائدین، ٹرینرز اور بنانے والے جو پاکستان میں AI اور بلاک چین لانے کے لیے کام کر رہے ہیں۔"
          />
        }
      />
      <TeamSection />
    </>
  );
}