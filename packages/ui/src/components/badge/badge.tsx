import type { HTMLAttributes } from 'react'

import { cn } from '@trroev/ui/cn'

import type { BadgeVariantProps } from './Badge.variants'
import { badgeVariants } from './Badge.variants'

type BadgeProps = BadgeVariantProps & HTMLAttributes<HTMLDivElement>

const Badge = ({ className, radius, variant, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ className, radius, variant }))}
      {...props}
    />
  )
}

export { Badge }
export type { BadgeProps }
