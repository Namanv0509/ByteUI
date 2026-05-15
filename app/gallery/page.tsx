import { getGalleryCatalog } from '@/lib/gallery/discover.server'
import { GalleryPageClient } from './gallery-client'

export default function GalleryPage() {
  const catalog = getGalleryCatalog()

  return <GalleryPageClient catalog={catalog} />
}
