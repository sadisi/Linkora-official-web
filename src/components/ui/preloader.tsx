'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Ensure preloader disappears even if something fails
    window.onload = () => setLoading(false)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="relative h-24 w-24 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-2xl shadow-primary/20"
            >
              <Image
                src="/logo.png"
                alt="Linkora Logo"
                fill
                sizes="96px"
                className="object-contain p-2"
                priority
                loading="eager"
              />
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-[2px] rounded-full bg-primary/30"
            >
              <motion.div
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="h-full w-1/3 bg-primary shadow-[0_0_10px_var(--color-primary)]"
              />
            </motion.div>
            
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs tracking-widest text-muted-foreground uppercase"
            >
              Initializing Linkora...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
