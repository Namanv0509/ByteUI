'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ComponentCard } from '@/components/component-card'
import { GalleryComponentPreview } from '@/components/gallery/gallery-component-preview'
import type { GallerySection } from '@/lib/gallery/types'
import { motion } from 'framer-motion'

type CategoriesPageClientProps = {
  catalog: GallerySection[]
}

export function CategoriesPageClient({ catalog }: CategoriesPageClientProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Component Collections</h1>
          <p className="text-xl text-foreground/60">
            Components grouped by design style — controlled in{' '}
            <code className="text-sm">lib/component-sections.ts</code>
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {catalog.length === 0 ? (
          <p className="text-center text-foreground/60">
            No collections enabled. Turn on a section in{' '}
            <code className="text-sm">lib/component-sections.ts</code>.
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
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                {section.description && (
                  <p className="text-foreground/60">{section.description}</p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  {section.components.length} component
                  {section.components.length === 1 ? '' : 's'}
                </p>
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
    </div>
  )
}
