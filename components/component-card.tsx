'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import type { GalleryComponent } from '@/lib/gallery/types'

interface ComponentCardProps {
  component: GalleryComponent
  preview?: React.ReactNode
}

export function ComponentCard({ component, preview }: ComponentCardProps) {
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const componentKey = component.sectionId ? `${component.sectionId}/${component.slug}` : component.slug
  const installCommand = `npx @explorers_111/byteui add ${componentKey}`

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const href = `/component/${component.sectionId}/${component.slug}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="group relative h-full"
    >
      <motion.div
        className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
        whileHover={{ y: -8 }}
        onClick={(e) => {
          // Don't navigate if clicking on a button or link inside the preview
          const target = e.target as HTMLElement
          if (target.closest('a') || target.closest('button')) {
            return
          }
          router.push(href)
        }}
      >
        <div className="h-48 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center overflow-hidden relative">
          {preview && (
            <motion.div
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center w-full h-full"
            >
              {preview}
            </motion.div>
          )}
        </div>

        <div className="p-6">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
              {component.name}
            </h3>
          </div>

          <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
            {component.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {component.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="text-xs text-muted-foreground font-medium">
            {component.sectionTitle}
          </span>
        </div>

        <motion.button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleCopy()
          }}
          className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 border border-border opacity-0 group-hover:opacity-100 transition-opacity z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? (
            <Check size={18} className="text-green-500" />
          ) : (
            <Copy size={18} className="text-foreground/70" />
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
