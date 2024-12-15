import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@trroev/ui/cn'

import type { TextVariantsProps } from './Text.variants'
import { textVariants } from './Text.variants'

type TextProps = {
  asChild?: boolean
} & ComponentPropsWithoutRef<'p'> &
  TextVariantsProps

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ asChild, className, size, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'p'

    return (
      <Comp
        className={cn(textVariants({ className, size }))}
        ref={ref}
        {...rest}
      />
    )
  },
)
Text.displayName = 'Text'

export { Text }
export type { TextProps }
