import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PrincipalSection } from "@/components/home/PrincipalSection";
import { AcademicPathways } from "@/components/home/AcademicPathways";
import { FacilitiesShowcase } from "@/components/home/FacilitiesShowcase";
import { OutcomesSection } from "@/components/home/OutcomesSection";
import { AdmissionsJourney } from "@/components/home/AdmissionsJourney";
import { Gazette } from "@/components/home/Gazette";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <PrincipalSection />
      <AcademicPathways />
      <FacilitiesShowcase />
      <OutcomesSection />
      <AdmissionsJourney />
      <Gazette />
      <ClosingCTA />
    </>
  );
}
