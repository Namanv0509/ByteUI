'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { createGalleryComponentLoader } from '@/lib/gallery/load-component'

type GalleryComponentPreviewProps = {
  sectionId: string
  slug: string
}

export function GalleryComponentPreview({
  sectionId,
  slug,
}: GalleryComponentPreviewProps) {
  const Component = useMemo(() => {
    const loader = createGalleryComponentLoader(sectionId, slug)
    if (!loader) return null

    return dynamic(loader, {
      loading: () => (
        <div className="text-sm text-muted-foreground">Loading preview…</div>
      ),
    })
  }, [sectionId, slug])

  if (!Component) {
    return (
      <p className="text-sm text-muted-foreground">Preview not available</p>
    )
  }

  return <Component />
}
