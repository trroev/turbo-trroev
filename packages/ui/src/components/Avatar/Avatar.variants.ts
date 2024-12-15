import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const avatarVariants = cva('relative flex shrink-0 overflow-hidden', {
  defaultVariants: {
    radius: 'full',
    size: 'md',
  },
  variants: {
    radius: {
      full: 'rounded-full',
      lg: 'rounded-lg',
      md: 'rounded-md',
      none: 'rounded-none',
      sm: 'rounded-sm',
    },
    size: {
      lg: 'size-12',
      md: 'size-10',
      sm: 'size-8',
      xl: 'size-14',
      xs: 'size-6',
    },
  },
})

export { avatarVariants }
export type AvatarVariantProps = VariantProps<typeof avatarVariants>
