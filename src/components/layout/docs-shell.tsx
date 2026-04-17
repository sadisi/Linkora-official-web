'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DOCS_STRUCTURE } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { ChevronRight, Search, Menu, X } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface DocsShellProps {
  children: React.ReactNode
}

export function DocsShell({ children }: DocsShellProps) {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = React.useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Search Header */}
      <div className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-8">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search documentation..."
                className="pl-10 h-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 flex-1 flex flex-col md:flex-row gap-8 py-8">
        {/* Sidebar */}
        <aside className={cn(
          "fixed inset-0 top-16 z-30 bg-background md:block md:w-64 md:h-[calc(100vh-8rem)] md:sticky md:top-24 overflow-y-auto custom-scrollbar transition-transform",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}>
          <nav className="space-y-8 p-4 md:p-0">
            {DOCS_STRUCTURE.map((section) => (
              <div key={section.slug} className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const href = `/docs/${item.slug}`
                    const isActive = pathname === href
                    
                    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
                      return null
                    }
                    
                    return (
                      <li key={item.slug}>
                        <Link
                          href={href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all group",
                            isActive 
                              ? "bg-primary/10 text-primary font-semibold" 
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )}
                        >
                          {item.title}
                          <ChevronRight className={cn(
                            "w-4 h-4 transition-transform",
                            isActive ? "rotate-90 opacity-100" : "opacity-0 group-hover:opacity-100"
                          )} />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 max-w-3xl min-w-0 pb-20">
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
