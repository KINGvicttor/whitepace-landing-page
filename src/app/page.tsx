'use client'

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExtensionSection } from "@/components/ExtensionSection";
import { WorkSection } from "@/components/WorkSection";


const Page = () => {
  return (
    <div className="font-inter bg-primary-darkblue">
      <Header />
      <HeroSection />
      <WorkSection />
      <ExtensionSection />
    </div>
  )
}

export default Page;