import { cva, VariantProps } from 'class-variance-authority'

const dividerVariants = cva('shrink-0 bg-border', {
  variants: {
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export { dividerVariants }
export type DividerVariantProps = VariantProps<typeof dividerVariants>
