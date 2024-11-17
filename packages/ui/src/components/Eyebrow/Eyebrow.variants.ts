import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const eyebrowVariants = cva('text-sm/4 font-semibold', {
  defaultVariants: {
    color: 'default',
  },
  variants: {
    color: {
      default: 'text-tertiary',
      inverse: 'text-muted',
    },
  },
})

export { eyebrowVariants }
export type EyebrowVariantsProps = VariantProps<typeof eyebrowVariants>
