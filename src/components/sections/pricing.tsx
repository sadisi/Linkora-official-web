'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const freeFeatures = [
  "Basic note taking",
  "Markdown support",
  "Local storage sync",
  "Up to 50 active notes",
  "Standard editor tools",
  "Community support"
]

const premiumFeatures = [
  "Unlimited end-to-end encrypted sync",
  "AI-powered note summarization",
  "Advanced publish & share capabilities",
  "Custom domain support",
  "Customizable themes & typography",
  "Priority 24/7 developer support"
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-x-0 top-0 h-96 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Choose your workflow
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Start exploring Linkora for free, or upgrade to Premium for power-user developer tools. Both plans can be customized later.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          
          {/* Free Tier */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-between rounded-3xl bg-neutral-900/40 p-8 ring-1 ring-border xl:p-10 hover:bg-neutral-800/50 transition-colors backdrop-blur-md"
          >
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 id="tier-free" className="text-xl font-semibold leading-8 text-foreground">Free</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">The essentials to get started and explore the ecosystem.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">$0</span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {freeFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="outline" className="mt-8 w-full border-border hover:bg-white/5">
              Get started for free
            </Button>
          </motion.div>

          {/* Premium Tier */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-between rounded-3xl bg-neutral-900/60 p-8 ring-2 ring-primary xl:p-10 relative overflow-hidden backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3 id="tier-premium" className="text-xl font-semibold leading-8 text-primary">Premium</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold leading-5 text-primary border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  Most popular
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">Advanced functionality tailored for power users.</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">$9.99</span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="primary" className="mt-8 w-full relative z-10">
              Upgrade to Premium
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
