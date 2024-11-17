import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const textLockupVariants = cva('flex flex-col gap-8', {
  defaultVariants: {
    alignment: 'left',
    kind: 'large',
  },
  variants: {
    alignment: {
      center: 'items-center text-center',
      left: 'items-start text-left',
      right: 'items-end text-right',
    },
    kind: {
      large: '',
      small: 'gap-6',
    },
  },
})

export { textLockupVariants }
export type TextLockupVariantsProps = VariantProps<typeof textLockupVariants>
