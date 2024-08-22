'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@shared/ui/cn'

import { labelVariants, type LabelVariantProps } from './label.variants'

type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  LabelVariantProps

const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
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
