'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FEATURES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

export function InteractiveShowcase() {
  const [activeFeature, setActiveFeature] = React.useState(FEATURES[0])

  return (
    <motion.section 
      id="product" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 relative overflow-hidden bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Feature Selection */}
          <div className="w-full lg:w-1/3 space-y-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Master your knowledge.</h2>
              <p className="text-muted-foreground">Click a feature to see how Linkora transforms your workflow.</p>
            </div>
            
            <div className="space-y-2">
              {FEATURES.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={cn(
                    "w-full text-left p-6 rounded-2xl transition-all duration-300 border",
                    activeFeature.id === feature.id
                      ? "bg-card border-primary shadow-xl shadow-primary/10"
                      : "bg-transparent border-transparent hover:bg-card/50"
                  )}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn("p-2 rounded-lg", feature.bg)}>
                      <feature.icon className={cn("w-5 h-5", feature.color)} />
                    </div>
                    <span className="font-bold">{feature.title}</span>
                  </div>
                  <AnimatePresence mode="wait">
                    {activeFeature.id === feature.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Mockup */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              key={activeFeature.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-video rounded-3xl border border-border bg-[#1e1f22] overflow-hidden shadow-2xl group"
            >
              {/* Mock Application Interface */}
              <div className="absolute inset-0 flex flex-col">
                <div className="h-10 border-b border-white/5 bg-black/20 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                
                <div className="flex-1 flex">
                  {/* Sidebar Mock */}
                  <div className="w-48 border-r border-white/5 bg-black/10 p-4 space-y-4">
                    <div className="h-3 w-3/4 bg-white/10 rounded" />
                    <div className="space-y-2 pt-4">
                      <div className="h-2 w-full bg-primary/20 rounded" />
                      <div className="h-2 w-5/6 bg-white/5 rounded" />
                      <div className="h-2 w-4/6 bg-white/5 rounded" />
                    </div>
                  </div>
                  
                  {/* Content Area Mock */}
                  <div className="flex-1 p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white/90">
                        {activeFeature.title} Demo
                      </h3>
                      <div className="flex gap-2">
                        {activeFeature.details.slice(0, 2).map((detail, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/20">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
                        {activeFeature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-white/60">
                            <Check className="w-4 h-4 text-green-500" />
                            {detail}
                          </div>
                        ))}
                      </div>
                      
                      {/* Interactive Visual Element */}
                      <div className="relative h-32 rounded-xl bg-black/20 border border-dashed border-white/10 flex items-center justify-center">
                        <activeFeature.icon className={cn("w-12 h-12 opacity-20", activeFeature.color)} />
                        <motion.div
                          animate={{ opacity: [0.1, 0.3, 0.1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={cn("absolute inset-0 blur-2xl opacity-10", activeFeature.bg)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
