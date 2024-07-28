import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primaryForeground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondaryForeground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructiveForeground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      radius: 'full',
    },
  },
)

export { badgeVariants }
export type BadgeVariantProps = VariantProps<typeof badgeVariants>
