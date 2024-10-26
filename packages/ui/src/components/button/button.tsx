import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@trroev/ui/cn'

import { buttonVariants, type ButtonVariantProps } from './button.variants'

type ButtonProps = {
  asChild?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
export type { ButtonProps }
