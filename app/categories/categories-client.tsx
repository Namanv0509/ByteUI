'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ComponentCard } from '@/components/component-card'
import { GalleryComponentPreview } from '@/components/gallery/gallery-component-preview'
import { PageShell } from '@/components/page-shell'
import type { GallerySection } from '@/lib/gallery/types'
import { motion } from 'framer-motion'

type CategoriesPageClientProps = {
  catalog: GallerySection[]
}

export function CategoriesPageClient({ catalog }: CategoriesPageClientProps) {
  return (
    <PageShell>
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-4"
        >
          <h1 className="page-title">Collections</h1>
          <p className="page-subtitle">
            Components grouped by design style. Add any of them with the CLI.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {catalog.length === 0 ? (
          <p className="text-center section-copy neo-panel p-8">
            No collections enabled. Turn on a section in{' '}
            <code className="neo-chip">lib/component-sections.ts</code>.
          </p>
        ) : (
          catalog.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="mb-8 space-y-2">
                <h2 className="section-title">{section.title}</h2>
                {section.description && (
                  <p className="section-copy">{section.description}</p>
                )}
                <span className="neo-tag inline-block">
                  {section.components.length} component
                  {section.components.length === 1 ? '' : 's'}
                </span>
              </div>

              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {section.components.map((component) => (
                  <ComponentCard
                    key={component.id}
                    component={component}
                    preview={
                      <GalleryComponentPreview
                        sectionId={component.sectionId}
                        slug={component.slug}
                      />
                    }
                  />
                ))}
              </motion.div>
            </motion.div>
          ))
        )}
      </section>

      <Footer />
    </PageShell>
  )
}
