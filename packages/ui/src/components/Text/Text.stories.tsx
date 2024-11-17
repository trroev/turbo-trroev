import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'

const meta: Meta<typeof Text> = {
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit beatae iure totam, sunt cupiditate ab accusantium distinctio fuga placeat provident est mollitia modi delectus!',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['extraSmall', 'small', 'base', 'large', 'extraLarge'],
    },
  },
  component: Text,
  title: 'Typeography/Text',
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  name: 'Text',

  render: args => <Text {...args} />,
}
