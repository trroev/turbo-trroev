import { type Meta, type StoryObj } from '@storybook/react'

import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui/card'

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: props => (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>Card Content</CardContent>
    </Card>
  ),
}
