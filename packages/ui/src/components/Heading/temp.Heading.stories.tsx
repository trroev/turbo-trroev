import type { Meta, StoryObj } from '@storybook/react'

import type { HeadingVariantProps } from './Heading.variants'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  args: {
    as: 'h1',
  } satisfies HeadingVariantProps,
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    color: {
      control: { type: 'radio' },
      options: ['default', 'inverse'],
    },
  },
  component: Heading,
  title: 'Typeography/Heading',
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  render: (args: HeadingVariantProps) => (
    <Heading {...args}>Hello World</Heading>
  ),
}
