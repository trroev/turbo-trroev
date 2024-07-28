import { type HTMLAttributes } from 'react'

import { cn } from '@shared/ui/cn'

import { badgeVariants, type BadgeVariantProps } from './badge.variants'

export type BadgeProps = HTMLAttributes<HTMLDivElement> & BadgeVariantProps

const Badge = ({ className, radius, variant, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ radius, variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
