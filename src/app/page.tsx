import HeroSection from "./HeroSection";
import OurGoalsSection from "./OurGoalsSection";
import OurProgress from "./OurProgress";
import LiveUpdates from "./LiveUpdates";
import CTASection from "./CTASection";
import HowWeDo from "./HowWeDo";
import WhatWeDo from "./WhatWeDo";

export default function Home() {
  return (
    <div className="">
     <HeroSection />
     <OurGoalsSection />
     <WhatWeDo/>
     <HowWeDo/>
     <OurProgress />
     <LiveUpdates />
     <CTASection />
    </div>
  );
}
