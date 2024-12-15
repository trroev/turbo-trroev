import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const constrainerVariants = cva('mx-auto w-full px-4', {
  defaultVariants: {
    mode: 'default',
  },
  variants: {
    mode: {
      default: 'max-w-[1660px] sm:px-8 lg:px-20',
      narrow: 'max-w-3xl sm:px-12 lg:px-32',
      wide: 'max-w-9xl px-0',
    },
  },
})

export { constrainerVariants }
export type ConstrainerVariantsProps = VariantProps<typeof constrainerVariants>
