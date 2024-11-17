import type { Meta, StoryObj } from '@storybook/react'

import { TextLockup } from '@trroev/ui/TextLockup'

import { Constrainer } from './Constrainer'

const meta: Meta<typeof Constrainer> = {
  args: {
    children: (
      <TextLockup
        body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis expedita necessitatibus molestias et laudantium? Ipsam architecto quia laboriosam, quos dignissimos enim explicabo? Aliquid, eveniet accusamus!"
        callsToAction={[
          {
            href: '/link',
            id: '1',
            label: 'Link 1',
            target: '_blank',
          },
        ]}
        eyebrow="Eyebrow Goes Here"
        heading="Heading Goes Here"
      />
    ),
  },
  argTypes: {
    mode: {
      control: { type: 'radio' },
      options: ['default', 'narrow', 'wide'],
    },
  },
  component: Constrainer,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Constrainer',
}

export default meta

type Story = StoryObj<typeof Constrainer>

export const Default: Story = {
  name: 'Constrainer',

  render: args => <Constrainer className="bg-slate-200" {...args} />,
}
