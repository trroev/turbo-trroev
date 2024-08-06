import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '@shared/ui/button'

import { Input } from './input'

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    radius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'radio' },
    },
    type: {
      options: ['text', 'password', 'email', 'file'],
      control: { type: 'radio' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: args => <Input placeholder="jane.doe@email.com" {...args} />,
}

export const File: Story = {
  args: {
    type: 'file',
  },

  render: args => <Input {...args} />,
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },

  render: args => <Input placeholder="jane.doe@email.com" {...args} />,
}

export const WithButton: Story = {
  render: args => (
    <div className="flex max-w-sm flex-col gap-2 sm:flex-row">
      <Input placeholder="jane.doe@email.com" {...args} />
      <Button>Subscribe</Button>
    </div>
  ),
}
