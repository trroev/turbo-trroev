import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@trroev/ui/Button'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Dialog',
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>This is a Dialog</DialogTitle>
          <DialogDescription>
            This is a description of the dialog. You can put any information
            here.
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            felis ut ipsum pulvinar cursus. Nullam sit amet sapien sit amet
            tellus lacinia pharetra.
          </p>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button>Close Dialog</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
