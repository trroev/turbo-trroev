'use client'

import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '@trroev/ui/cn'

import type { DividerVariantProps } from './Divider.variants'
import { dividerVariants } from './Divider.variants'

type DividerProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
  DividerVariantProps

const Divider = forwardRef<
  ComponentRef<typeof SeparatorPrimitive.Root>,
  DividerProps
>(({ className, decorative = true, orientation, ...props }, ref) => (
  <SeparatorPrimitive.Root
    className={cn(dividerVariants({ className, orientation }))}
    decorative={decorative}
    orientation={orientation}
    ref={ref}
    {...props}
  />
))
Divider.displayName = 'Divider'

export { Divider }
