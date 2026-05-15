import { existsSync, readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { enabledComponentSections } from '@/lib/component-sections'
import type { GalleryComponent, GallerySection } from './types'

const COMPONENTS_ROOT = join(process.cwd(), 'components')

function formatComponentName(slug: string): string {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function isComponentFile(filename: string): boolean {
  return filename.endsWith('.tsx') && !filename.includes('.stories.')
}

function discoverSectionComponents(
  sectionId: string,
  sectionTitle: string,
  sectionDescription?: string
): GalleryComponent[] {
  const sectionDir = join(COMPONENTS_ROOT, sectionId)
  if (!existsSync(sectionDir)) return []

  return readdirSync(sectionDir)
    .filter(isComponentFile)
    .map((filename) => {
      const slug = filename.replace(/\.tsx$/, '')
      const filePath = join(sectionDir, filename)
      const code = readFileSync(filePath, 'utf-8')
      const name = formatComponentName(slug)

      return {
        id: `${sectionId}/${slug}`,
        slug,
        sectionId,
        sectionTitle,
        name,
        description: `${name} from the ${sectionTitle} collection.`,
        tags: [sectionTitle.toLowerCase(), slug],
        code,
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

/** All enabled sections and their components (filesystem discovery). */
export function getGalleryCatalog(): GallerySection[] {
  return enabledComponentSections.map((section) => ({
    id: section.id,
    title: section.title,
    description: section.description,
    components: discoverSectionComponents(
      section.id,
      section.title,
      section.description
    ),
  }))
}

export function getAllGalleryComponents(): GalleryComponent[] {
  return getGalleryCatalog().flatMap((section) => section.components)
}

export function getGalleryComponentById(
  id: string
): GalleryComponent | undefined {
  return getAllGalleryComponents().find((component) => component.id === id)
}
