import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const dividerVariants = cva('shrink-0 bg-border', {
  defaultVariants: {
    orientation: 'horizontal',
  },
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
})

export { dividerVariants }
export type DividerVariantProps = VariantProps<typeof dividerVariants>
