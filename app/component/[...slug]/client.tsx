'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GalleryComponentPreview } from '@/components/gallery/gallery-component-preview'
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

  const componentKey = component.sectionId ? `${component.sectionId}/${component.slug}` : component.slug
  const installCommand = `npx @explorers_111/byteui add ${componentKey}`

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft size={20} />
            Back to Gallery
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-slate-700 rounded-2xl border border-border p-12 flex items-center justify-center min-h-96">
              <GalleryComponentPreview
                sectionId={component.sectionId}
                slug={component.slug}
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{component.name}</h1>
              <p className="text-lg text-foreground/70">{component.description}</p>

              <div className="flex flex-wrap gap-2 pt-4">
                {component.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-foreground/60 mb-2">Collection</p>
                <p className="font-semibold">{component.sectionTitle}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Installation</h2>
              <motion.button
                type="button"
                onClick={handleCopy}
                className="px-4 py-2 rounded-lg bg-yellow-500 dark:bg-yellow-600 text-black font-semibold flex items-center gap-2 hover:bg-yellow-600 dark:hover:bg-yellow-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? (
                  <>
                    <Check size={18} /> Copied Command!
                  </>
                ) : (
                  <>
                    <Copy size={18} /> Copy Command
                  </>
                )}
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CodeBlock code={installCommand} language="bash" collapsible={false} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 space-y-3"
            >
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">
                How to Install
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-foreground/70">
                <li>Initialize ByteUI in your project (if not done yet): <code className="bg-yellow-200/60 dark:bg-yellow-900/60 px-1.5 py-0.5 rounded text-xs font-mono text-foreground">npx @explorers_111/byteui init</code></li>
                <li>Run the command above to install <strong>{component.name}</strong> directly into your project.</li>
                <li>All required npm packages and Tailwind theme CSS variables will be installed automatically.</li>
                <li>Import and use the component in your React/Next.js application!</li>
              </ol>
            </motion.div>
          </motion.div>
        </div>

        {relatedComponents.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-border"
          >
            <h2 className="text-3xl font-bold mb-8">More from {component.sectionTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedComponents.map((relatedComp) => (
                <Link
                  key={relatedComp.id}
                  href={`/component/${relatedComp.sectionId}/${relatedComp.slug}`}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="p-4 rounded-xl border border-border hover:border-yellow-500 transition-colors cursor-pointer"
                  >
                    <h3 className="font-bold text-lg mb-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                      {relatedComp.name}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {relatedComp.description}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  )
}
