import type { Meta, StoryObj } from '@storybook/react'

import type { BadgeProps } from './Badge'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  args: {
    variant: 'default',
  },
  argTypes: {
    radius: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'destructive', 'secondary'],
    },
  },
  component: Badge,
  title: 'Badge',
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args: BadgeProps) => <Badge {...args}>Badge Text</Badge>,
}
