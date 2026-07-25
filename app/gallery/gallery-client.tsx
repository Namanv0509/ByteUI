'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ComponentCard } from '@/components/component-card'
import { GalleryComponentPreview } from '@/components/gallery/gallery-component-preview'
import { PageShell } from '@/components/page-shell'
import type { GallerySection } from '@/lib/gallery/types'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import TextArea from '@/components/neo-brutalism/text-area'

type GalleryPageClientProps = {
  catalog: GallerySection[]
}

export function GalleryPageClient({ catalog }: GalleryPageClientProps) {
  const [search, setSearch] = useState('')
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null)

  const filteredCatalog = useMemo(() => {
    const query = search.trim().toLowerCase()

    return catalog
      .map((section) => ({
        ...section,
        components: section.components.filter((component) => {
          const matchesSection =
            !selectedSectionId || component.sectionId === selectedSectionId

          if (!query) return matchesSection

          const matchesSearch =
            component.name.toLowerCase().includes(query) ||
            component.description.toLowerCase().includes(query) ||
            component.tags.some((tag) => tag.toLowerCase().includes(query)) ||
            component.sectionTitle.toLowerCase().includes(query)

          return matchesSection && matchesSearch
        }),
      }))
      .filter((section) => section.components.length > 0)
  }, [catalog, search, selectedSectionId])

  const totalVisible = filteredCatalog.reduce(
    (count, section) => count + section.components.length,
    0
  )

  return (
    <PageShell>
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-4"
        >
          <h1 className="page-title">Component Gallery</h1>
          <p className="page-subtitle">
            Browse components and add them with the CLI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8 max-w-2xl mx-auto"
        >
          <TextArea
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='neo-input'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 justify-center flex-wrap mb-12"
        >
          <button
            type="button"
            onClick={() => setSelectedSectionId(null)}
            className={`neo-filter ${selectedSectionId === null ? 'active' : ''}`}
          >
            All
          </button>
          {catalog.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setSelectedSectionId(section.id)}
              className={`neo-filter ${selectedSectionId === section.id ? 'active' : ''}`}
            >
              {section.title}
            </button>
          ))}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {totalVisible === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 neo-panel p-8"
          >
            <p className="section-copy">
              No components found. Try adjusting your search or enable a section in{' '}
              <code className="neo-chip">lib/component-sections.ts</code>.
            </p>
          </motion.div>
        ) : (
          filteredCatalog.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="mb-8">
                <h2 className="section-title mb-2">{section.title}</h2>
                {section.description && (
                  <p className="section-copy">{section.description}</p>
                )}
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
