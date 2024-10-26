'use client'

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@trroev/ui/cn'

import { dividerVariants, type DividerVariantProps } from './divider.variants'

type DividerProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
  DividerVariantProps

const Divider = forwardRef<
  ComponentRef<typeof SeparatorPrimitive.Root>,
  DividerProps
>(({ className, decorative = true, orientation, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(dividerVariants({ orientation, className }))}
    {...props}
  />
))
Divider.displayName = 'Divider'

export { Divider }
