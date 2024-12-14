import type { Meta, StoryObj } from '@storybook/react'

import type { HeadingVariantsProps } from './Heading.variants'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  args: {
    display: 'h1',
  } satisfies HeadingVariantsProps,
  argTypes: {
    display: {
      control: { type: 'radio' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
  component: Heading,
  title: 'Typeography/Heading',
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  render: (args: HeadingVariantsProps) => (
    <Heading {...args}>Hello World</Heading>
  ),
}
