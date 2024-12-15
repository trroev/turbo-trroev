import { create } from '@storybook/theming'

// import logo from '../public/trroev-logo.png'

const theme = create({
  appContentBg: 'hsl(0 0% 100%)',
  base: 'dark',
  // brandUrl: 'https://trevormathiak.dev',
  // brandImage: logo,
  brandTarget: '_self',
  brandTitle: 'turbo-trroev UI',
  colorPrimary: 'hsl(0 0% 3.9%)',
  colorSecondary: 'hsl(0 0% 9%)',
})

export { theme }
