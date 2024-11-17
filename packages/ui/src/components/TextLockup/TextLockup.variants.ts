import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const textLockupVariants = cva('flex flex-col gap-8', {
  defaultVariants: {
    kind: 'large',
  },
  variants: {
    kind: {
      large: '',
      small: 'gap-6',
    },
  },
})

export { textLockupVariants }
export type TextLockupVariantsProps = VariantProps<typeof textLockupVariants>
