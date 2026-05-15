export type GalleryComponent = {
  /** Unique id: `{sectionId}/{file-slug}` e.g. `neo-brutalism/button` */
  id: string
  slug: string
  sectionId: string
  sectionTitle: string
  name: string
  description: string
  tags: string[]
  code: string
}

export type GallerySection = {
  id: string
  title: string
  description?: string
  components: GalleryComponent[]
}
