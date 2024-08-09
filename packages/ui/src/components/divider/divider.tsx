'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@shared/ui/cn'

import { DividerVariantProps, dividerVariants } from './divider.variants'

type DividerProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
  DividerVariantProps

const Divider = forwardRef<
  ElementRef<typeof SeparatorPrimitive.Root>,
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
