'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@shared/ui/cn'

import { LabelVariantProps, labelVariants } from './label.variants'

type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  LabelVariantProps

const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
  ),
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
