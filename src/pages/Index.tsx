import HeroSection from "@/components/HeroSection";
import TrackActivitySection from "@/components/TrackActivitySection";
import ExerciseBenefitsSection from "@/components/ExerciseBenefitsSection";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <LanguageSelector />
      <HeroSection />
      <TrackActivitySection />
      <ExerciseBenefitsSection />
    </main>
  );
};

export default Index;
