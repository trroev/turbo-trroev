import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const inputVariants = cva(
  'flex w-full border border-input bg-background p-2.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    defaultVariants: {
      radius: 'md',
    },
    variants: {
      radius: {
        full: 'rounded-full',
        lg: 'rounded-lg',
        md: 'rounded-md',
        none: 'rounded-none',
        sm: 'rounded-sm',
      },
    },
  },
)

export { inputVariants }
export type InputVariantProps = VariantProps<typeof inputVariants>
