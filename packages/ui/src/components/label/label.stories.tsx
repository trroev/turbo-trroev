import { type Meta, type StoryObj } from '@storybook/react'

import { Input } from '@shared/ui/input'

import { Label } from './label'

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
}

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: args => <Label {...args}>Label</Label>,
}

export const WithInput: Story = {
  render: args => (
    <div className="flex flex-col gap-1.5">
      <Label {...args}>Email Address</Label>
      <Input placeholder="jane.doe@email.com" type="email" />
    </div>
  ),
}
