'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface HeroProps {
  onCtaClick?: () => void
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          New: AI-Powered Research Assistant is here
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70"
        >
          Better notes, <br className="hidden md:block" />
          <span className="text-primary italic">faster</span> insights.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Linkora is the ultimate note-taking platform for developers and teams. 
          Experience a fluid, distraction-free environment enhanced by AI to help you 
          think, write, and build faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto px-8 relative overflow-hidden group shadow-[0_0_20px_var(--color-primary-opacity-30)]" 
            onClick={onCtaClick}
          >
            <div className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
            <span className="relative z-10">Get Started for Free</span>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto px-8" onClick={onCtaClick}>
            View Documentation
          </Button>
        </motion.div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 50 }}
          className="mt-20 relative mx-auto max-w-5xl group perspective-1000"
        >
          <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000" />
          <div className="relative aspect-video rounded-xl bg-[#1e1f22] border border-white/10 overflow-hidden shadow-2xl shadow-primary/20">
            {/* Mock Editor UI */}
            <div className="flex h-full">
              <div className="w-16 border-r border-white/5 bg-black/20 flex flex-col items-center py-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-white/5" />
                ))}
              </div>
              <div className="w-64 border-r border-white/5 bg-black/10 p-4 space-y-4">
                <div className="h-4 w-3/4 bg-white/10 rounded" />
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-3 w-full bg-white/5 rounded" />
                ))}
              </div>
              <div className="flex-1 p-8 text-left space-y-6">
                <div className="h-8 w-1/2 bg-white/10 rounded" />
                <div className="space-y-3">
                  <div className="h-4 w-full bg-white/5 rounded" />
                  <div className="h-4 w-5/6 bg-white/5 rounded" />
                  <div className="h-4 w-4/6 bg-white/5 rounded" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-primary/10 rounded-lg border border-primary/20" />
                  <div className="aspect-video bg-accent/10 rounded-lg border border-accent/20" />
                </div>
              </div>
            </div>
            
            {/* Floating Glows */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
