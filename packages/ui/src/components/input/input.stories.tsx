import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '@shared/ui/button'
import { Label } from '@shared/ui/label'

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
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    type: 'email',
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
