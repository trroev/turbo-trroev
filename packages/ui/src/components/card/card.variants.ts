import { cva, type VariantProps } from 'class-variance-authority'

const cardVariants = cva('bg-card text-card-foreground', {
  variants: {
    variant: {
      default: '',
      withBackgroundImage: 'relative overflow-hidden text-background',
    },
    isBlurred: {
      true: 'backdrop-blur-md backdrop-saturate-150',
      false: '',
    },
    hasBorder: {
      true: 'border border-border',
      false: 'border-none',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
    },
    shadow: {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    isBlurred: false,
    radius: 'lg',
    shadow: 'sm',
  },
})

export { cardVariants }
export type CardVariantProps = VariantProps<typeof cardVariants>
