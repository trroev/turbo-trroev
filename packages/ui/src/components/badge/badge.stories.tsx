import { type Meta, type StoryObj } from '@storybook/react'

import { Badge, type BadgeProps } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'secondary'],
      control: { type: 'radio' },
    },
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
  },
  args: {
    variant: 'default',
  },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args: BadgeProps) => <Badge {...args}>Badge Text</Badge>,
}
