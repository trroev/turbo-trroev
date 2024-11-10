import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@trroev/ui/cn'

import type { ButtonVariantProps } from './Button.variants'
import { buttonVariants } from './Button.variants'

type ButtonProps = {
  asChild?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
