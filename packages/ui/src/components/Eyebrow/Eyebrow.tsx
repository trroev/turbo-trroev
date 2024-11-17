import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@trroev/ui/cn'

import type { EyebrowVariantsProps } from './Eyebrow.variants'
import { eyebrowVariants } from './Eyebrow.variants'

type EyebrowProps = {
  asChild?: boolean
} & ComponentPropsWithoutRef<'p'> &
  EyebrowVariantsProps

const Eyebrow = forwardRef<HTMLParagraphElement, EyebrowProps>(
  ({ asChild, className, color, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'p'

    return (
      <Comp
        className={cn(eyebrowVariants({ color }), className)}
        ref={ref}
        {...rest}
      />
    )
  },
)
Eyebrow.displayName = 'Eyebrow'

export { Eyebrow }
export type { EyebrowProps }
