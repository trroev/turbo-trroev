/* eslint-disable jsx-a11y/anchor-is-valid */
import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@trroev/icons'

import type { ButtonProps } from './Button'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  args: {
    asChild: false,
    size: 'md',
    variant: 'default',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg', 'icon'],
    },
    variant: {
      control: { type: 'radio' },
      options: [
        'default',
        'destructive',
        'secondary',
        'outline',
        'ghost',
        'link',
      ],
    },
  },
  component: Button,
  title: 'Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args: ButtonProps) => <Button {...args}>Button Text</Button>,
}

export const WithIcon: Story = {
  args: {
    size: 'icon',
  },

  render: (args: ButtonProps) => (
    <Button {...args}>
      <Icon className="size-6" name="Cookie" />
    </Button>
  ),
}

export const AsChild: Story = {
  args: {
    asChild: true,
    variant: 'link',
  },

  render: (args: ButtonProps) => (
    <Button {...args}>
      <a href="#">Button Link</a>
    </Button>
  ),
}
