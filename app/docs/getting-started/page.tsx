'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageShell } from '@/components/page-shell'
import Button from '@/components/neo-brutalism/button'
import { NPM_PACKAGE_NAME, NPM_PACKAGE_URL } from '@/lib/links'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {ArrowLeft} from 'lucide-react';


export default function DocsPage() {
  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: `
        ByteUI is a React component library you install with a CLI.
        Components are copied into your project so you own the source.

        Stack:
        • React 18+
        • Tailwind CSS
        • TypeScript
        • styled-components (for neo-brutalism)
      `,
    },
    {
      id: 'installation',
      title: 'Installation',
      content: `
        Package on npm: ${NPM_PACKAGE_NAME}
        ${NPM_PACKAGE_URL}

        1. Initialize ByteUI in your project:
           npx @explorers_111/byteui init

        2. List available components:
           npx @explorers_111/byteui list

        3. Add a component:
           npx @explorers_111/byteui add neo-brutalism/button
      `,
    },
    {
      id: 'usage',
      title: 'How to Use',
      content: `
        1. Browse the Gallery to find a component
        2. Copy the install command from the card or detail page
        3. Run npx @explorers_111/byteui add <name>
        4. Import the file from your components folder and use it
      `,
    },
    {
      id: 'customization',
      title: 'Customization',
      content: `
        Because code lands in your repo, edit freely.

        Theme:
        - Neo tokens live under [data-theme="neo"]
        - Wrap UI with NeoThemeWrapper to apply the theme
        - Change accent colors, borders, and shadows via CSS variables

        Components:
        - Adjust padding, radius, and copy in the component file
        - Keep TypeScript props in sync when you extend behavior
      `,
    },
    {
      id: 'dependencies',
      title: 'Dependencies',
      content: `
        Core:
        - React 18+
        - Next.js 13+ (for this docs site)
        - Tailwind CSS 3+

        Often installed by the CLI when needed:
        - framer-motion
        - styled-components
        - lucide-react
      `,
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      content: `
        Issue: Styles look unthemed
        Solution: Wrap with NeoThemeWrapper or ensure data-theme="neo" is on a parent

        Issue: Tailwind classes missing
        Solution: Confirm Tailwind scans your components path

        Issue: CLI cannot find a component
        Solution: Run npx @explorers_111/byteui list and use the exact key
      `,
    },
  ]

  return (
    <PageShell>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 self-start sticky top-10"
        >
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 font-bold hover:opacity-70"
            style={{ color: 'var(--color-text-black)' }}
          >
            <ArrowLeft size={20} />
            Back to Docs
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14 space-y-4"
        >
          <h1 className="page-title">Documentation</h1>
          <p className="page-subtitle">
            Install with the CLI, own the source, style with neo tokens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <div className="sticky top-24 neo-panel p-3 space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="neo-sidebar-link"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 space-y-10"
          >
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.05 }}
                className="scroll-mt-24 neo-panel p-6 md:p-8"
              >
                <h2 className="section-title mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.split('\n').map((line, i) => {
                    if (!line.trim()) return null
                    const trimmed = line.trim()
                    if (trimmed.startsWith('•')) {
                      return (
                        <div key={i} className="section-copy ml-4">
                          {trimmed}
                        </div>
                      )
                    }
                    if (trimmed.match(/^\d+\./)) {
                      return (
                        <div key={i} className="section-copy ml-1">
                          {trimmed}
                        </div>
                      )
                    }
                    if (trimmed.match(/^[A-Z].*:$/)) {
                      return (
                        <h3
                          key={i}
                          className="text-xl font-bold mt-4 mb-1"
                          style={{ fontFamily: 'var(--font-lexend)' }}
                        >
                          {trimmed}
                        </h3>
                      )
                    }
                    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
                      return (
                        <p key={i} className="section-copy leading-relaxed">
                          <a
                            href={trimmed}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-bold underline-offset-2 hover:opacity-70"
                          >
                            {trimmed}
                          </a>
                        </p>
                      )
                    }
                    return (
                      <p key={i} className="section-copy leading-relaxed">
                        {trimmed}
                      </p>
                    )
                  })}
                </div>
              </motion.section>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="neo-panel neo-panel-accent p-10 text-center space-y-10">
            <h2 className="section-title cta-doc">Ready to build?</h2>
            <p className="section-copy max-w-xl mx-auto cta-doc">
              Browse the gallery and add components with one command.
            </p>
            <code className="neo-chip">
              npx @explorers_111/byteui add neo-brutalism/button
            </code>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/gallery">
                <Button variant="primary">Explore Components</Button>
              </Link>
              <a href={NPM_PACKAGE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">View on npm</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </PageShell>
  )
}
