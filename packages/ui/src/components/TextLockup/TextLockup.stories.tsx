import type { Meta, StoryObj } from '@storybook/react'

import { TextLockup } from './TextLockup'

const meta: Meta<typeof TextLockup> = {
  args: {
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis expedita necessitatibus molestias et laudantium? Ipsam architecto quia laboriosam, quos dignissimos enim explicabo? Aliquid, eveniet accusamus!',
    callsToAction: [
      {
        href: '/link',
        id: '1',
        label: 'Link 1',
        target: '_blank',
      },
      {
        href: '/link',
        id: '2',
        label: 'Link 2',
        target: '_blank',
      },
    ],
    eyebrow: 'Eyebrow Goes Here',
    heading: 'Heading Goes Here',
    icon: 'Cookie',
    kind: 'small',
    subHeading: 'Subheading Goes Here',
  },
  argTypes: {
    kind: {
      control: { type: 'radio' },
      options: ['small', 'large'],
    },
  },
  component: TextLockup,
  title: 'Typeography/Text Lockup',
}

export default meta

type Story = StoryObj<typeof TextLockup>

export const Default: Story = {
  args: {
    kind: 'large',
    subHeading: 'Subheading Goes Here',
  },

  name: 'Text Lockup',
  render: args => <TextLockup {...args} />,
}
