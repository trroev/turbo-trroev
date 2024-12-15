import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      radius: 'md',
      size: 'md',
      variant: 'default',
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
        icon: 'size-10',
        lg: 'px-6 py-3',
        md: 'px-4 py-2.5',
        sm: 'px-3 py-2',
      },
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
    },
  },
)

export { buttonVariants }
export type ButtonVariantProps = VariantProps<typeof buttonVariants>
