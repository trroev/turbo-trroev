import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const cardVariants = cva('bg-card text-card-foreground', {
  defaultVariants: {
    hasBorder: true,
    isBlurred: false,
    radius: 'lg',
    shadow: 'sm',
    variant: 'default',
  },
  variants: {
    hasBorder: {
      false: 'border-none',
      true: 'border border-border',
    },
    isBlurred: {
      false: '',
      true: 'backdrop-blur-md backdrop-saturate-150',
    },
    radius: {
      lg: 'rounded-lg',
      md: 'rounded-md',
      none: 'rounded-none',
      sm: 'rounded-sm',
    },
    shadow: {
      lg: 'shadow-lg',
      md: 'shadow-md',
      none: '',
      sm: 'shadow-sm',
    },
    variant: {
      default: '',
      withBackgroundImage: 'relative overflow-hidden text-background',
    },
  },
})

export { cardVariants }
export type CardVariantProps = VariantProps<typeof cardVariants>
