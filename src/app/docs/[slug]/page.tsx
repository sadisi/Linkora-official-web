import { notFound } from 'next/navigation'
import { DOCS_STRUCTURE, FEATURES, HOTKEYS } from '@/lib/constants'

interface DocsPageProps {
  params: Promise<{ slug: string }>
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params
  
  // Flatten structures to find the item
  const allItems = DOCS_STRUCTURE.flatMap(section => section.items)
  const item = allItems.find(i => i.slug === slug)
  
  if (!item) {
    notFound()
  }

  // Feature-specific content mapping
  const feature = FEATURES.find(f => f.id === slug)

  return (
    <div className="space-y-8">
      <header>
        <div className="flex items-center gap-4 text-primary text-sm font-bold uppercase tracking-widest mb-4">
          Documentation <span className="text-muted-foreground">/</span> {item.title}
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">{item.title}</h1>
      </header>

      <section className="prose prose-zinc dark:prose-invert max-w-none">
        {feature ? (
          <>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
            <h3 className="pt-8">Key Capabilities</h3>
            <ul>
              {feature.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <div className="p-8 rounded-3xl bg-muted/50 border border-border mt-12">
              <h4 className="mt-0">Pro Tip</h4>
              <p className="text-sm mb-0">
                {slug === 'wikilinks' && "Use WikiLinks to create an 'Inbox' or 'Daily Log' that maps all your fleeting thoughts into one hub."}
                {slug === 'graph-view' && "Toggle the 3D mode in the graph view for a more immersive 'Second Brain' feeling."}
                {slug === 'search' && "Universal Search looks inside your PDFs too (if they are OCR enabled)."}
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn how to master {item.title} to get the most out of Linkora.
            </p>
            {slug === 'shortcuts' && (
              <div className="mt-12 overflow-hidden border border-border rounded-2xl">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted text-muted-foreground uppercase text-xs tracking-widest">
                    <tr>
                      <th className="px-6 py-4 font-black">Action</th>
                      <th className="px-6 py-4 font-black">Shortcut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {HOTKEYS.map((hk) => (
                      <tr key={hk.action}>
                        <td className="px-6 py-4 font-medium">{hk.action}</td>
                        <td className="px-6 py-4 text-primary font-bold">{hk.key}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <p className="pt-8">
              This section is currently being expanded. Check back soon for more detailed tutorials and video guides!
            </p>
          </>
        )}
      </section>
      
      <footer className="pt-12 mt-12 border-t border-border flex justify-between gap-4">
        <Link href="/docs" className="text-sm font-bold text-muted-foreground hover:text-foreground">
          ← Back to Overview
        </Link>
        <button className="text-sm font-bold text-primary hover:underline">
          Edit this page on GitHub
        </button>
      </footer>
    </div>
  )
}

import Link from 'next/link'
