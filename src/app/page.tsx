'use client'

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";


const Page = () => {
  return (
    <div className="w-screen font-inter bg-primary-darkblue">
      <Header />
      <HeroSection />
    </div>
  )
}

export default Page;