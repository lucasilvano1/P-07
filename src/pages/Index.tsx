
import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MeetWesSection } from "@/components/sections/MeetWesSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { WestcityFixSection } from "@/components/sections/WestcityFixSection";
import { ServicesSliderSection } from "@/components/sections/ServicesSliderSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { SharedBackgroundLayout } from "@/components/sections/SharedBackgroundLayout";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-westside-purple-dark text-white pt-16">
      <HeroSection />
      <MeetWesSection />
      <ProblemsSection />
      
      {/* Combined sections with shared background */}
      <SharedBackgroundLayout>
        <WestcityFixSection />
        <Separator className="my-8 bg-white/10" />
        <ServicesSliderSection />
      </SharedBackgroundLayout>
      
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default Index;
