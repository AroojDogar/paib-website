import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeamSection from "@/components/TeamSection";
import CommunitySection from "@/components/CommunitySection";
import { T } from "@/lib/lang";

export const metadata: Metadata = { title: "Management | PAIB" };

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow={<T en="MANAGEMENT" ur="انتظامیہ" />}
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
            en="Our leadership, and the developers and team members building with PAIB."
            ur="ہماری قیادت، اور وہ ڈیولپرز اور ٹیم ممبرز جو PAIB کے ساتھ بنا رہے ہیں۔"
          />
        }
      />
      <TeamSection />
      <CommunitySection />
    </>
  );
}