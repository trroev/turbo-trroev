import { cva, type VariantProps } from 'class-variance-authority'

const cardVariants = cva('border bg-card text-cardForeground', {
  variants: {
    variant: {
      default: '',
      withBackgroundImage: 'relative overflow-hidden text-background',
    },
    isBlurred: {
      true: 'backdrop-blur-md backdrop-saturate-150',
      false: '',
    },
    radius: {
      none: '',
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
