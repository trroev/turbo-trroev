import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@trroev/ui/cn'

type EyebrowProps = {
  asChild?: boolean
} & ComponentPropsWithoutRef<'div'>

const Eyebrow = forwardRef<HTMLParagraphElement, EyebrowProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'p'

    return (
      <Comp
        className={cn('text-sm/4 font-semibold text-tertiary', className)}
        ref={ref}
        {...rest}
      />
    )
  },
)
Eyebrow.displayName = 'Eyebrow'
export { Eyebrow }
export type { EyebrowProps }
