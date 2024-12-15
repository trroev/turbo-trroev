import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@trroev/ui/Button'
import { Label } from '@trroev/ui/Label'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  args: {
    type: 'email',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    radius: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    type: {
      control: { type: 'radio' },
      options: ['text', 'password', 'email', 'file'],
    },
  },
  component: Input,
  title: 'Input',
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

export const WithLabel: Story = {
  render: args => (
    <div className="flex flex-col gap-1.5">
      <Label>Email Address</Label>
      <Input placeholder="jane.doe@email.com" type="email" {...args} />
    </div>
  ),
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
