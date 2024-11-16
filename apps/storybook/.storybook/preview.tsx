import type { Preview } from '@storybook/react'

import '@trroev/themes/default.css'
import '@trroev/ui/styles.css'

const preview: Preview = {
  decorators: [
    Story => (
      // add necessary providers here
      <div style={{ margin: '2rem' }}>
        <Story />
      </div>
    ),
  ],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    nextjs: {
      appDirectory: true,
    },
  },

  tags: ['autodocs'],
}

export default preview

// declare global {
//   interface Window {
//     getEmbedNamespace: () => string | null
//     getEmbedTheme: () => EmbedThemeConfig | null
//   }
// }

// window.getEmbedNamespace = () => {
//   const url = new URL(document.URL)
//   const namespace = url.searchParams.get('embed')
//   return namespace
// }

// window.getEmbedTheme = () => {
//   return 'auto'
// }
