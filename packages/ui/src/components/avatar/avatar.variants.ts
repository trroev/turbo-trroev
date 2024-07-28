import { cva, type VariantProps } from 'class-variance-authority'

const avatarVariants = cva('relative flex shrink-0 overflow-hidden', {
  variants: {
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    size: {
      xs: 'size-6',
      sm: 'size-8',
      md: 'size-10',
      lg: 'size-12',
      xl: 'size-14',
    },
  },
  defaultVariants: {
    radius: 'full',
    size: 'md',
  },
})

export { avatarVariants }
export type AvatarVariantProps = VariantProps<typeof avatarVariants>
