'use client'

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExtensionSection } from "@/components/ExtensionSection";
import { WorkSection } from "@/components/WorkSection";
import { CustomizeSection } from "@/components/CustomizeSection";
import { PlanSection } from "@/components/PlanSection";
import { YourWorkSection } from "@/components/YourWorkSection";
import { YourDataSection } from "@/components/YourDataSection";
import { SponsorSection } from "@/components/SponsorSection";
import { AppsSection } from "@/components/AppsSection";
import { TestimonialSection } from "@/components/TestimonialSection";


const Page = () => {
  return (
    <div className="font-inter bg-primary-darkblue">
      <Header />
      <HeroSection />
      <WorkSection />
      <ExtensionSection />
      <CustomizeSection />
      <PlanSection />
      <YourWorkSection />
      <YourDataSection />
      <SponsorSection />
      <AppsSection />
      <TestimonialSection />
    </div>
  )
}

export default Page;