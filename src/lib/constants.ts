import { 
  FileText, 
  Network, 
  Search, 
  Zap, 
  Keyboard, 
  MousePointer2 
} from 'lucide-react'

export const FEATURES = [
  {
    id: 'wikilinks',
    title: 'WikiLinks',
    description: 'Connect thoughts seamlessly using [[WikiLinks]]. If a note doesn\'t exist, just click to create it!',
    icon: FileText,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    details: [
      'Bidirectional linking',
      'Automatic note creation',
      'Visual connection mapping'
    ]
  },
  {
    id: 'graph',
    title: '3D Graph View',
    description: 'Navigate your knowledge in an interactive 3D universe. Orbit, pan, and watch nodes glow as you discover connections.',
    icon: Network,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    details: [
      'Interactive 2D & 3D visualization',
      'Color-coded nodes',
      'Real-time link updates'
    ]
  },
  {
    id: 'search',
    title: 'Universal Search',
    description: 'Find anything across your entire library or jump to specific keywords inside a single thought.',
    icon: Search,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    details: [
      'Global full-text search',
      'In-note find (Ctrl+F)',
      'Instant name matching'
    ]
  },
  {
    id: 'hotkeys',
    title: 'Power User Hotkeys',
    description: 'Keep your hands on the keyboard with advanced shortcuts for saving, finding, and theme switching.',
    icon: Keyboard,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    details: [
      'Ctrl+S for instant saving',
      'Quick theme toggling',
      'Modal navigation'
    ]
  }
]

export const HOTKEYS = [
  { action: 'Save Note', key: 'Ctrl + S' },
  { action: 'Find in Note', key: 'Ctrl + F' },
  { action: 'Switch View', key: 'Tab' },
  { action: 'Toggle Sidebar', key: 'Ctrl + B' },
]

export const DOCS_STRUCTURE = [
  {
    title: 'Getting Started',
    slug: 'getting-started',
    items: [
      { title: 'Introduction', slug: 'introduction' },
      { title: 'Workflow Basics', slug: 'workflow-basics' },
    ]
  },
  {
    title: 'Core Features',
    slug: 'features',
    items: [
      { title: 'WikiLinks & Backlinks', slug: 'wikilinks' },
      { title: 'Interactive Graph', slug: 'graph-view' },
      { title: 'Power Search', slug: 'search' },
    ]
  },
  {
    title: 'Advanced',
    slug: 'advanced',
    items: [
      { title: 'Keyboard Shortcuts', slug: 'shortcuts' },
      { title: 'Markdown Support', slug: 'markdown' },
    ]
  }
]
