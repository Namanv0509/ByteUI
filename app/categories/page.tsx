import { getGalleryCatalog } from '@/lib/gallery/discover.server'
import { CategoriesPageClient } from './categories-client'

export default function CategoriesPage() {
  const catalog = getGalleryCatalog()

  return <CategoriesPageClient catalog={catalog} />
}
