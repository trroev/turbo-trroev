import { cva, type VariantProps } from 'class-variance-authority'

const dividerVariants = cva('shrink-0 bg-border', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export { dividerVariants }
export type DividerVariantProps = VariantProps<typeof dividerVariants>
