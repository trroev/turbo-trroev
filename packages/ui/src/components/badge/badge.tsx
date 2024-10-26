import { type HTMLAttributes } from 'react'

import { cn } from '@trroev/ui/cn'

import { badgeVariants, type BadgeVariantProps } from './badge.variants'

type BadgeProps = HTMLAttributes<HTMLDivElement> & BadgeVariantProps

const Badge = ({ className, radius, variant, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ radius, variant, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
export type { BadgeProps }
