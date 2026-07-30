import type { StorybookConfig } from '@storybook/nextjs-vite'
import {
  enabledComponentSections,
  STORY_FILE_PATTERN,
} from '../lib/component-sections.ts'

const config: StorybookConfig = {
  stories: enabledComponentSections.map((section) => ({
    directory: `../components/${section.id}/`,
    files: STORY_FILE_PATTERN,
    titlePrefix: section.title,
  })),

  addons: [],
  framework:{ name: '@storybook/nextjs-vite',
    options: {},

  },
  staticDirs: ['../public'],
}

export default config
