import type { Meta, StoryObj } from '@storybook/react'

import { Hero } from './Hero'

const meta: Meta<typeof Hero> = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quisquam inventore dolorum nulla! Laboriosam veniam consectetur doloribus id nihil nobis, hic reiciendis sequi quaerat commodi?',
    callsToAction: [
      { href: '#', id: '1', label: 'Primary CTA' },
      { href: '#', id: '2', label: 'Secondary CTA' },
    ],
    eyebrow: 'Eyebrow Goes Here',
    heading: 'Heading Goes Here',
    image: {
      alt: 'This is the alt text',
      src: 'https://picsum.photos/750/500',
    },
  },
  argTypes: {},
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Hero',
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  name: 'Hero',

  render: args => <Hero {...args} />,
}
