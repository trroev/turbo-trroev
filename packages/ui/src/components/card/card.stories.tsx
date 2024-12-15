import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@trroev/ui/Button'

import type { CardProps } from './Card'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card'

const meta: Meta<typeof Card> = {
  args: {
    isBlurred: false,
    radius: 'lg',
    shadow: 'sm',
    variant: 'default',
  },
  argTypes: {
    isBlurred: {
      control: { type: 'boolean' },
    },
    radius: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    shadow: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'withBackgroundImage'],
    },
  },
  component: Card,
  title: 'Card',
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args: CardProps) => (
    <Card className="w-80" {...args}>
      <CardContent className="p-3">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
      </CardContent>
    </Card>
  ),
}

export const WithHeader: Story = {
  render: (args: CardProps) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Card Content — Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithHeaderAndFooter: Story = {
  render: (args: CardProps) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithBackgroundImage: Story = {
  args: {
    variant: 'withBackgroundImage',
  },

  render: (args: CardProps) => (
    <Card {...args} className="w-[350px]">
      <img
        alt="Card background"
        className="absolute inset-0 z-0 size-full object-cover brightness-[0.4]"
        src="https://picsum.photos/200/300"
      />
      <div className="relative z-10">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription className="text-background/75">
            Card Subtitle
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
        </CardContent>
      </div>
    </Card>
  ),
}

export const WithBodyImage: Story = {
  render: (args: CardProps) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Subtitle</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <img
          alt="Card background"
          className="w-full rounded object-cover object-center"
          src="https://picsum.photos/200/300"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
}
