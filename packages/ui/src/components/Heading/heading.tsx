import type { ComponentPropsWithRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@trroev/ui/cn'

import type { HeadingVariantProps } from './Heading.variants'
import { headingVariants } from './Heading.variants'

type HeadingElement = ComponentRef<'h1'>
type HeadingOwnProps = {
  as?: HeadingVariantProps['as']
  asChild?: boolean
  className?: string
  color?: HeadingVariantProps['color']
}

type HeadingProps = ComponentPropsWithRef<'h1'> & HeadingOwnProps

const Heading = forwardRef<HeadingElement, HeadingProps>(
  (
    {
      as = 'h1',
      asChild = false,
      children,
      className,
      color = 'default',
      ...headingProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : as

    return (
      <Comp
        className={cn(headingVariants({ as, color }), className)}
        {...headingProps}
        ref={ref}
      >
        {children}
      </Comp>
    )
  },
)
Heading.displayName = 'Heading'

export { Heading }
export type { HeadingProps }
