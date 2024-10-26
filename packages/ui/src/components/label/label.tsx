'use client'

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@trroev/ui/cn'

import { labelVariants, type LabelVariantProps } from './label.variants'

type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  LabelVariantProps

const Label = forwardRef<ComponentRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants({ className }))}
      {...props}
    />
  ),
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
