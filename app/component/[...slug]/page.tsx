import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import {
  getAllGalleryComponents,
  getGalleryComponentById,
} from '@/lib/gallery/discover.server'
import { ClientComponentDetail } from './client'

export async function generateStaticParams() {
  return getAllGalleryComponents().map((component) => ({
    slug: component.id.split('/'),
  }))
}

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const id = slug.join('/')
  const component = getGalleryComponentById(id)

  if (!component) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Component not found</h1>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedComponents = getAllGalleryComponents()
    .filter(
      (item) =>
        item.sectionId === component.sectionId && item.id !== component.id
    )
    .slice(0, 3)

  return (
    <ClientComponentDetail
      component={component}
      relatedComponents={relatedComponents}
    />
  )
}
