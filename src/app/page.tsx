'use client'

import * as React from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { CTA } from '@/components/sections/cta'
import { InteractiveShowcase } from '@/components/sections/interactive-showcase'
import { JourneyGuide } from '@/components/sections/journey-guide'
import { Pricing } from '@/components/sections/pricing'
import { BetaModal } from '@/components/layout/beta-modal'

export default function Home() {
  const [isBetaOpen, setIsBetaOpen] = React.useState(false)

  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Hero onCtaClick={() => setIsBetaOpen(true)} />
        <InteractiveShowcase />
        <Features />
        <JourneyGuide />
        <Pricing />
        <CTA onCtaClick={() => setIsBetaOpen(true)} />
      </div>
      <Footer />
      <BetaModal isOpen={isBetaOpen} onClose={() => setIsBetaOpen(false)} />
    </main>
  )
}
