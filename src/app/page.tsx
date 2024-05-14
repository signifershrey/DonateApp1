import Image from "next/image";
import Container from "./container";
import HeroSection from "./HeroSection";
import OurGoalsSection from "./OurGoalsSection";
import OurProgress from "./OurProgress";
import LiveUpdates from "./LiveUpdates";
import CTASection from "./CTASection";

export default function Home() {
  return (
    <>
     <HeroSection />
     <OurGoalsSection />
     <OurProgress />
     <LiveUpdates />
     <CTASection />
    </>
  );
}
