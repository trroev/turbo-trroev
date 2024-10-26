import { type Meta, type StoryObj } from '@storybook/react'

import { Avatar, type AvatarProps } from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    img: {
      control: { type: 'object' },
    },
    fallback: {
      control: { type: 'text' },
    },
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
  },
  args: {
    img: {
      src: 'https://github.com/trroev.png',
      alt: 'trroev',
    },
    fallback: 'TM',
    radius: 'full',
    size: 'md',
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: (args: AvatarProps) => <Avatar {...args} />,
}

export const BrokenImage: Story = {
  args: {
    img: {
      src: 'https://broken.link.com/broken-pic.jpg',
      alt: 'broken-pic',
    },
  },

  render: (args: AvatarProps) => <Avatar {...args} />,
}
