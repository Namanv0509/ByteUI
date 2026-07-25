'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GalleryComponentPreview } from '@/components/gallery/gallery-component-preview'
import { PageShell } from '@/components/page-shell'
import Button from '@/components/neo-brutalism/button'
import type { GalleryComponent } from '@/lib/gallery/types'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { CodeBlock } from '@/components/code-block'

type ClientComponentDetailProps = {
  component: GalleryComponent
  relatedComponents: GalleryComponent[]
}

export function ClientComponentDetail({
  component,
  relatedComponents,
}: ClientComponentDetailProps) {
  const [copied, setCopied] = useState(false)

  const componentKey = component.sectionId
    ? `${component.sectionId}/${component.slug}`
    : component.slug
  const installCommand = `npx @explorers_111/byteui add ${componentKey}`

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <PageShell>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-bold hover:opacity-70"
            style={{ color: 'var(--color-text-black)' }}
          >
            <ArrowLeft size={20} />
            Back to Gallery
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="neo-panel neo-panel-accent flex items-center justify-center min-h-96">
              <GalleryComponentPreview
                sectionId={component.sectionId}
                slug={component.slug}
              />
            </div>

            <div className="space-y-4">
              <h1 className="detail-title">{component.name}</h1>
              <p className="section-copy">{component.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {component.tags.map((tag) => (
                  <span key={tag} className="neo-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="section-title">Installation</h2>
              <Button variant="primary" onClick={handleCopy} type="button">
                {copied ? (
                  <span className="inline-flex items-center gap-2">
                    <Check size={18} /> Copied
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Copy size={18} /> Copy Command
                  </span>
                )}
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="neo-panel overflow-hidden"
            >
              <CodeBlock code={installCommand} language="bash" collapsible={false} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="neo-panel neo-panel-mint p-6 space-y-3"
            >
              <h3
                className="font-bold text-lg"
                style={{ fontFamily: 'var(--font-lexend)' }}
              >
                How to install
              </h3>
              <ol className="list-decimal list-inside space-y-2 section-copy">
                <li>
                  Init once:{' '}
                  <code className="neo-chip">npx @explorers_111/byteui init</code>
                </li>
                <li>
                  Run the command above to add <strong>{component.name}</strong>.
                </li>
                <li>Dependencies and theme CSS are installed automatically.</li>
                <li>Import the component from your project and use it.</li>
              </ol>
            </motion.div>
          </motion.div>
        </div>

        {relatedComponents.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 pt-12"
            style={{ borderTop: 'var(--border-width) solid var(--border-color)' }}
          >
            <h2 className="section-title mb-8">More from {component.sectionTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedComponents.map((relatedComp) => (
                <Link
                  key={relatedComp.id}
                  href={`/component/${relatedComp.sectionId}/${relatedComp.slug}`}
                >
                  <div className="neo-panel p-5 h-full transition-transform hover:translate-x-[2px] hover:translate-y-[2px]">
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ fontFamily: 'var(--font-lexend)' }}
                    >
                      {relatedComp.name}
                    </h3>
                    <p className="section-copy">{relatedComp.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </PageShell>
  )
}
