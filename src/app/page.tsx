'use client'

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExtensionSection } from "@/components/ExtensionSection";
import { WorkSection } from "@/components/WorkSection";
import { CustomizeSection } from "@/components/CustomizeSection";
import { PlanSection } from "@/components/PlanSection";
import { YourWorkSection } from "@/components/YourWorkSection";
import { YourDataSection } from "@/components/YourDataSection";


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
    </div>
  )
}

export default Page;