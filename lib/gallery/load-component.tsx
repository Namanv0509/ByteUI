'use client'

import type { ComponentType } from 'react'
import { componentSections } from '@/lib/component-sections'

type ComponentModule = { default: ComponentType }

type ComponentLoader = () => Promise<ComponentModule>

const enabledSectionIds = new Set(
  componentSections.filter((section) => section.enabled).map((section) => section.id)
)

/** Add a `case` when you add a folder in `lib/component-sections.ts`. */
function resolveLoader(sectionId: string, slug: string): ComponentLoader | null {
  switch (sectionId) {
    case 'neo-brutalism':
      return () => import(`@/components/neo-brutalism/${slug}`)
    case 'old-component':
      return () => import(`@/components/old-component/${slug}`)
    // Add `new-component` here once `components/new-component/` has components.
    default:
      return null
  }
}

export function createGalleryComponentLoader(
  sectionId: string,
  slug: string
): ComponentLoader | null {
  if (!enabledSectionIds.has(sectionId)) return null
  return resolveLoader(sectionId, slug)
}
