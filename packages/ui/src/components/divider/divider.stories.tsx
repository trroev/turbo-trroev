import { type Meta, type StoryObj } from '@storybook/react'

import { Divider } from './divider'

const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
  args: {
    orientation: 'horizontal',
  },
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: args => <Divider {...args} />,
}
