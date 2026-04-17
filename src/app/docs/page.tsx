import Link from 'next/link'

export default function DocsIntroduction() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Welcome to Linkora</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The ultimate platform for building your personal knowledge network.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">What is Linkora?</h2>
        <p className="leading-relaxed">
          Linkora is more than a note taking app. It is a tool for thought that allows you 
          to connect ideas using a non-linear network structure. By using bidirectional 
          linking and a powerful 3D visualization, Linkora helps you discover relationships 
          between your thoughts that you might have otherwise missed.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
        <Link 
          href="/docs/introduction" 
          className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all group"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">Start Here</span>
          <h3 className="text-xl font-bold mb-2">Workflow Basics</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Learn the core concepts of Linkora and how to capture your first thought.
          </p>
        </Link>
        <Link 
          href="/docs/wikilinks" 
          className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all group"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-purple-500 mb-2 block">Connect</span>
          <h3 className="text-xl font-bold mb-2">WikiLinks & Graphs</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Master the art of connecting thoughts and navigating your 3D graph.
          </p>
        </Link>
      </div>

      <section className="p-8 rounded-4xl bg-muted/50 border border-border mt-12">
        <h3 className="text-lg font-bold mb-4">Private Beta Access</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Linkora is currently in private beta for desktop (macOS, Windows, Linux). 
          Join the waitlist to get your access key and start building your network.
        </p>
        <button className="text-sm font-bold text-primary hover:underline">
          Join the waitlist →
        </button>
      </section>
    </div>
  )
}
