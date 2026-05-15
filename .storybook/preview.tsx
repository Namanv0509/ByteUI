import type { Preview } from '@storybook/nextjs-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Keep in sync with `lib/component-sections.ts` (Storybook requires a literal array).
    options: {
      storySort: {
        order: ['Neo Brutalism', 'New Components', 'Old Components'],
      },
    },
  },
}

export default preview
