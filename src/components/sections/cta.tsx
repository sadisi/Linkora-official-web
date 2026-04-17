'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CTAProps {
  onCtaClick?: () => void
}

export function CTA({ onCtaClick }: CTAProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Accents for Glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full -z-10 bg-linear-to-r from-primary/30 to-accent/30 opacity-50 blur-[120px] animate-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="relative p-12 md:p-24 rounded-[3rem] border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-3xl overflow-hidden text-center group shadow-2xl shadow-black/20">
          {/* Internal Animated Glass Glows */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -100, 0],
                y: [0, 80, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight"
          >
            Ready to supercharge <br className="hidden sm:block" />
            your <span className="text-primary italic">productivity?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Join thousands of developers and teams who already use Linkora 
            to manage their knowledge and ship faster. Start your search for insights today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Button
              size="lg"
              onClick={onCtaClick}
              className="relative overflow-hidden bg-primary text-primary-foreground hover:scale-105 px-10 py-7 text-lg rounded-2xl shadow-xl shadow-primary/25 transition-all group"
            >
              <div className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
              <span className="relative z-10">Get Started for Free</span>
            </Button>
            <Link 
              href="/docs" 
              className="text-foreground font-semibold hover:text-primary transition-colors flex items-center gap-2 group/link"
            >
              View Documentation 
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
