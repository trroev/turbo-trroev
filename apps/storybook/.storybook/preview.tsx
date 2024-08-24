import React from 'react'
import type { Preview } from '@storybook/react'

import '@shared/ui/styles'

const preview: Preview = {
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

  decorators: [
    Story => (
      // add necessary providers here
      <div style={{ margin: '2rem' }}>
        <Story />
      </div>
    ),
  ],
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
