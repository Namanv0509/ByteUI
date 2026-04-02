'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { ComponentItem } from '@/lib/components-data'

interface ComponentCardProps {
  component: ComponentItem
  preview?: React.ReactNode
}

export function ComponentCard({ component, preview }: ComponentCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(component.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="group relative h-full"
    >
      <Link href={`/component/${component.id}`}>
        <motion.div
          className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
          whileHover={{ y: -8 }}
        >
          {/* Preview Section */}
          <div className="h-48 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center overflow-hidden relative">
            {preview && (
              <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center"
              >
                {preview}
              </motion.div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                {component.name}
              </h3>
            </div>

            <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
              {component.description}
            </p>

            {/* Tags */}
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

            {/* Category Badge */}
            <span className="text-xs text-muted-foreground font-medium">
              {component.category}
            </span>
          </div>

          {/* Hover Copy Button */}
          <motion.button
            onClick={(e) => {
              e.preventDefault()
              handleCopy()
            }}
            className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 border border-border opacity-0 group-hover:opacity-100 transition-opacity"
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
      </Link>
    </motion.div>
  )
}
