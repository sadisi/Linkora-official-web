'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Monitor, Apple, ArrowRight, Download as DownloadIcon, CheckCircle2, AlertCircle } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'

const features_windows = [
  'Windows 10 or 11 (64-bit)',
  'Intel Core i3 or AMD equivalent',
  '4GB RAM minimum (8GB recommended)',
  'Local offline support',
]

const features_macos = [
  'macOS 12.0 Monterey or later',
  'Apple Silicon (M1/M2/M3) or Intel',
  '4GB RAM minimum (8GB recommended)',
  'Universal Binary for peak performance',
]

export default function DownloadPage() {
  return (
    <main className="relative flex flex-col min-h-screen pt-24">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-linear-to-r from-foreground via-foreground/80 to-primary/80 bg-clip-text text-transparent"
          >
            Get Linkora for your Desktop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Experience the full power of your personal knowledge network with our native desktop applications. <br />
            <span className="text-primary font-medium mt-2 inline-block">We exclusively support Windows and Apple devices.</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* macOS Download Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-colors"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 flex items-center justify-between">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Apple className="h-8 w-8" />
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  v0.1.0 (Latest)
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-2">Linkora for macOS</h2>
              <p className="text-muted-foreground mb-6">
                Native experience for Mac. Optimized for Apple Silicon.
              </p>

              <div className="space-y-3 mb-8 flex-1">
                {features_macos.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#" className="block w-full">
                <Button className="w-full group" size="lg">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download for macOS
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Button>
              </a>
              <p className="text-center text-xs text-muted-foreground mt-4">
                Universal build (.dmg) ≈ 85MB
              </p>
            </div>
          </motion.div>

          {/* Windows Download Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-colors"
          >
            <div className="absolute inset-0 bg-linear-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6 flex items-center justify-between">
                <div className="h-14 w-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Monitor className="h-8 w-8" />
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  v0.1.0 (Latest)
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-2">Linkora for Windows</h2>
              <p className="text-muted-foreground mb-6">
                Fast, reliable, and native feel for your PC.
              </p>

              <div className="space-y-3 mb-8 flex-1">
                {features_windows.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#" className="block w-full">
                <Button className="w-full group bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]" size="lg">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download for Windows
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Button>
              </a>
              <p className="text-center text-xs text-muted-foreground mt-4">
                Setup installer (.exe) ≈ 78MB
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto bg-muted/30 rounded-xl p-6 border border-border flex items-center gap-4 text-left"
        >
          <div className="h-10 w-10 shrink-0 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Linux / ChromeOS unsupported</h4>
            <p className="text-sm text-muted-foreground">
              Currently, Linkora is exclusively built for Apple macOS and Microsoft Windows. We do not have plans to expand to other operating systems at this time.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
