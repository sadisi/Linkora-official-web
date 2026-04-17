'use client'

import * as React from 'react'
import { Modal } from '@/components/ui/modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react'

interface BetaModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BetaModal({ isOpen, onClose }: BetaModalProps) {
  const [email, setEmail] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Private Beta Access">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
              <Sparkles className="w-6 h-6 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-bold mb-1">Linkora is currently in heavy development.</p>
                <p className="opacity-80">We're fine tuning the 3D graph and AI features. Join the waitlist to get early access when we ship!</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 text-base rounded-xl" 
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : 'Join the Waitlist'}
              </Button>
            </form>
            
            <p className="text-center text-xs text-muted-foreground italic">
              Don't worry, we'll only email you when it's ready.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-8 space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">You're on the list!</h3>
            <p className="text-muted-foreground max-w-xs mx-auto">
              We'll reach out to <strong>{email}</strong> as soon as the first beta spots open up.
            </p>
            <Button variant="outline" className="mt-4" onClick={onClose}>
              Close
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  )
}
