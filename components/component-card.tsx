'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import type { GalleryComponent } from '@/lib/gallery/types'
import Card from './neo-brutalism/card'
import styled from 'styled-components'

interface ComponentCardProps {
  component: GalleryComponent
  preview?: React.ReactNode
}

const PreviewSlot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .preview-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transform: scale(0.9);
  }

  .copy-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.5rem;
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--color-surface);
    box-shadow: var(--shadow-md-1);
    opacity: 0;
    z-index: 20;
    cursor: pointer;
    transition: opacity 0.15s ease, transform 0.15s ease;
  }

  &:hover .copy-btn {
    opacity: 1;
  }

  .copy-btn:hover {
    transform: translate(1.5px, 1.5px);
    box-shadow: var(--shadow-md-1);
  }
`

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;

  .tag {
    padding: 0.3rem 0.65rem;
    border: var(--border-width) solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--color-accent-4);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--color-text-black);
  }

  .section {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-text-black);
  }
`

export function ComponentCard({ component, preview }: ComponentCardProps) {
  const router = useRouter()
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

  const href = `/component/${component.sectionId}/${component.slug}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        fluid
        title={component.name}
        description={component.description}
        onClick={(e) => {
          const target = e.target as HTMLElement
          if (target.closest('a') || target.closest('button')) {
            return
          }
          router.push(href)
        }}
        footer={
          <Meta>
            {component.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
            <span className="section">{component.sectionTitle}</span>
          </Meta>
        }
      >
        <PreviewSlot>
          {preview && <div className="preview-inner">{preview}</div>}
          <button
            type="button"
            className="copy-btn"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleCopy()
            }}
            aria-label="Copy install command"
          >
            {copied ? (
              <Check size={18} className="text-green-600" />
            ) : (
              <Copy size={18} />
            )}
          </button>
        </PreviewSlot>
      </Card>
    </motion.div>
  )
}
