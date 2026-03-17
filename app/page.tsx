import HeroSection from "@/components/HeroSection";
import TargetAudience from "@/components/TargetAudience";
import Calculator from "@/components/Calculator";
import MissionSection from "@/components/OurMission";

export default function Home() {
  return (
      <main>
          <HeroSection/>
          <TargetAudience/>
          <Calculator/>
          <MissionSection/>
      </main>
  );
}
