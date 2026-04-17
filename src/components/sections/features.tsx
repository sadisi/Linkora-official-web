'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Search, 
  Shield, 
  Cpu, 
  Globe, 
  Command 
} from 'lucide-react'

const features = [
  {
    title: 'AI-Powered Search',
    description: 'Find any note instantly with semantic search that understands context, not just keywords.',
    icon: Search,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'Blazing Fast Sync',
    description: 'Your notes are synchronized across all your devices in real-time with zero latency.',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
  {
    title: 'Bank-Grade Security',
    description: 'End-to-end encryption ensures that only you can access your personal and professional data.',
    icon: Shield,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    title: 'Markdown Native',
    description: 'A powerful editor designed for developers with full markdown support and keyboard shortcuts.',
    icon: Command,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    title: 'Offline First',
    description: 'Work anywhere, anytime. Linkora works perfectly offline and syncs when you reconnect.',
    icon: Globe,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
  {
    title: 'Smart Organization',
    description: 'AI-driven tagging and categorization keep your workspace tidy without manual effort.',
    icon: Cpu,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Built for the modern <br className="hidden sm:block" /> 
            <span className="text-primary italic">knowledge worker.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to capture, organize, and retrieve information with superhuman speed.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
    </section>
  )
}
