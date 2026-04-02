import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { allComponents } from '@/lib/components-data'
import { ClientComponentDetail } from './client'

export async function generateStaticParams() {
  return allComponents.map((component) => ({
    id: component.id,
  }))
}

export default async function ComponentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const component = allComponents.find((c) => c.id === id)

  if (!component) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Component not found</h1>
        </div>
      </div>
    )
  }

  return <ClientComponentDetail component={component} />
}
