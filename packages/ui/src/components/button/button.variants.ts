import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primaryForeground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructiveForeground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accentForeground',
        secondary:
          'bg-secondary text-secondaryForeground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accentForeground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 rounded-md px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export { buttonVariants }
export type ButtonVariantProps = VariantProps<typeof buttonVariants>
