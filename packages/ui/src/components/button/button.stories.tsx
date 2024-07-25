/* eslint-disable jsx-a11y/anchor-is-valid */
import { type Meta, type StoryObj } from '@storybook/react'

import { Button, type ButtonProps } from './button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: [
        'default',
        'destructive',
        'secondary',
        'outline',
        'ghost',
        'link',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'icon'],
      control: { type: 'radio' },
    },
  },
  args: {
    asChild: false,
    variant: 'default',
    size: 'md',
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args: ButtonProps) => <Button {...args}>Button Text</Button>,
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
