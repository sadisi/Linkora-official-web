'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileEdit, Link, Globe, Network } from 'lucide-react'

const steps = [
  {
    title: 'Capture your thoughts',
    description: 'Start with a single note. Our markdown-native editor makes writing feel like second nature.',
    icon: FileEdit,
    color: 'text-blue-500',
  },
  {
    title: 'Connect instantly',
    description: 'Type [[WikiLinks]] to connect ideas. Map your knowledge as you write, creating a web of insights.',
    icon: Link,
    color: 'text-purple-500',
  },
  {
    title: 'Explore the Graph',
    description: 'Watch your notes come alive in the 3D Graph View. Discover hidden connections you never knew existed.',
    icon: Network,
    color: 'text-green-500',
  },
  {
    title: 'Sync everywhere',
    description: 'Your thoughts are always with you. Fast, encrypted sync ensures your library is safe and accessible.',
    icon: Globe,
    color: 'text-orange-500',
  },
]

export function JourneyGuide() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Mastering the Flow</h2>
          <p className="text-muted-foreground text-lg">Four simple steps to superhuman productivity.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto ${index % 2 === 0 ? 'md:mr-0 md:ml-auto' : 'md:ml-0'} shadow-lg`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
                
                <div className="hidden md:flex flex-none items-center justify-center w-12 h-12 rounded-full bg-background border border-border z-10 font-bold text-sm text-primary">
                  {index + 1}
                </div>
                
                <div className="flex-1 bg-muted/50 aspect-video rounded-3xl border border-border overflow-hidden relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent group-hover:bg-primary/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                    <step.icon className={`w-24 h-24 ${step.color} blur-[2px]`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
