'use client'

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExtensionSection } from "@/components/ExtensionSection";
import { WorkSection } from "@/components/WorkSection";
import { CustomizeSection } from "@/components/CustomizeSection";
import { PlanSection } from "@/components/PlanSection";


const Page = () => {
  return (
    <div className="font-inter bg-primary-darkblue">
      <Header />
      <HeroSection />
      <WorkSection />
      <ExtensionSection />
      <CustomizeSection />
      <PlanSection />
    </div>
  )
}

export default Page;