import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const preview: Preview = {
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'duplicate-id', selector: '*:not(#storybook-root)' }],
      },
      element: '#storybook-root',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        galaxyFold: {
          name: 'Galaxy Fold',
          styles: {
            height: '653px',
            width: '280px',
          },
          type: 'mobile',
        },
        pixel6: {
          name: 'Pixel 6',
          styles: {
            height: '915px',
            width: '412px',
          },
          type: 'mobile',
        },
        pixel6Pro: {
          name: 'Pixel 6 Pro',
          styles: {
            height: '892px',
            width: '412px',
          },
          type: 'mobile',
        },
      },
    },
  },
}

export { preview }
