import { type Meta, type StoryObj } from '@storybook/react'

import { Heading } from './heading'
import { type HeadingVariantsProps } from './heading.variants'

const meta: Meta<typeof Heading> = {
  title: 'Typeography/Heading',
  component: Heading,
  argTypes: {
    display: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'radio' },
    },
  },
  args: {
    display: 'h1',
  },
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  render: (args: HeadingVariantsProps) => (
    <Heading {...args}>Hello World</Heading>
  ),
}
