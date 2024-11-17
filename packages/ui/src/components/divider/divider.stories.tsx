import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
  component: Divider,
  title: 'Divider',
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: args => <Divider {...args} />,
}
