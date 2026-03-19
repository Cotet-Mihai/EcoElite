import HeroSection from "@/components/HeroSection";
import TargetAudience from "@/components/TargetAudience";
import Calculator from "@/components/Calculator";
import MissionSection from "@/components/OurMission";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
      <main>
          <HeroSection/>
          <TargetAudience/>
          <Calculator/>
          <MissionSection/>
          <FAQSection/>
          <div className={'mb-24'}>
              <ContactForm/>
          </div>
      </main>
  );
}
