'use client'

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WorkManagement } from "@/components/WorkManagement";


const Page = () => {
  return (
    <div className="font-inter bg-primary-darkblue">
      <Header />
      <HeroSection />
      <WorkManagement />
    </div>
  )
}

export default Page;