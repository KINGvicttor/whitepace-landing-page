'use client'

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CustomizeSection } from "@/components/CustomizeSection";
import { WorkSection } from "@/components/WorkSection";


const Page = () => {
  return (
    <div className="font-inter bg-primary-darkblue">
      <Header />
      <HeroSection />
      <WorkSection />
      <CustomizeSection />
    </div>
  )
}

export default Page;