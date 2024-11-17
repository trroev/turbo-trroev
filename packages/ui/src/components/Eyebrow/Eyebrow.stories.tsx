import type { Meta, StoryObj } from '@storybook/react'

import { Eyebrow } from './Eyebrow'

const meta: Meta<typeof Eyebrow> = {
  args: {
    children: 'Hello World',
  },
  component: Eyebrow,
  title: 'Typeography/Eyebrow',
}

export default meta

type Story = StoryObj<typeof Eyebrow>

export const Default: Story = {
  render: args => <Eyebrow {...args} />,
}
