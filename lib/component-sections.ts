/**
 * Single source of truth for which component folders appear in:
 * - Storybook (sidebar sections)
 * - ByteUI gallery & component detail pages (auto-discovers `*.tsx` files)
 *
 * To show a new folder: add an entry with `enabled: true`, add a matching
 * `case` in `lib/gallery/load-component.tsx`, and drop components in
 * `components/{id}/`. New files appear automatically (no registry).
 */
export type ComponentSection = {
  /** Folder name under `components/` (e.g. `neo-brutalism`) */
  id: string
  /** Section title in the Storybook sidebar */
  title: string
  /** Set to `false` to hide this folder without deleting stories */
  enabled: boolean
  description?: string
}

export const componentSections: ComponentSection[] = [
  {
    id: 'neo-brutalism',
    title: 'Neo Brutalism',
    enabled: true,
    description: 'Bold borders, hard shadows, high-contrast neo-brutalist UI',
  },
  {
    id: 'old-component',
    title: 'Old Components',
    enabled: false,
    description: 'Legacy components (hidden until ready)',
  },
  {
    id: 'new-component',
    title: 'New Components',
    enabled: false,
    description: 'Upcoming components (hidden until ready)',
  },
]

export const enabledComponentSections = componentSections.filter(
  (section) => section.enabled
)

export const STORY_FILE_PATTERN = '*.stories.@(js|jsx|mjs|ts|tsx)'
