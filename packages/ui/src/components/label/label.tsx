'use client'

import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '@trroev/ui/cn'

import type { LabelVariantProps } from './Label.variants'
import { labelVariants } from './Label.variants'

type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  LabelVariantProps

const Label = forwardRef<ComponentRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      className={cn(labelVariants({ className }))}
      ref={ref}
      {...props}
    />
  ),
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
