import type { Meta, StoryObj } from '@storybook/react'

import type { AvatarProps } from './Avatar'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  args: {
    fallback: 'TM',
    img: {
      alt: 'trroev',
      src: 'https://github.com/trroev.png',
    },
    radius: 'full',
    size: 'md',
  },
  argTypes: {
    fallback: {
      control: { type: 'text' },
    },
    img: {
      control: { type: 'object' },
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  component: Avatar,
  title: 'Avatar',
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: (args: AvatarProps) => <Avatar {...args} />,
}

export const BrokenImage: Story = {
  args: {
    img: {
      alt: 'broken-pic',
      src: 'https://broken.link.com/broken-pic.jpg',
    },
  },

  render: (args: AvatarProps) => <Avatar {...args} />,
}
