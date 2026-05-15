'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ComponentCard } from '@/components/component-card'
import { GalleryComponentPreview } from '@/components/gallery/gallery-component-preview'
import type { GallerySection } from '@/lib/gallery/types'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

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
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Component Gallery</h1>
          <p className="text-xl text-foreground/60">
            Browse components from enabled design collections
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8 max-w-2xl mx-auto"
        >
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={20}
          />
          <input
            type="text"
            placeholder="Search components..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
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
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedSectionId === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          >
            All
          </button>
          {catalog.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setSelectedSectionId(section.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedSectionId === section.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
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
            className="text-center py-16"
          >
            <p className="text-lg text-foreground/60">
              No components found. Try adjusting your search or enable a section in{' '}
              <code className="text-sm">lib/component-sections.ts</code>.
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
                <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                {section.description && (
                  <p className="text-foreground/60">{section.description}</p>
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
    </div>
  )
}
