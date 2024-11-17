import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

const textVariants = cva('font-sans text-foreground', {
  defaultVariants: {
    size: 'base',
  },
  variants: {
    size: {
      base: 'text-base',
      extraLarge: 'text-xl',
      extraSmall: 'text-xs',
      large: 'text-lg',
      small: 'text-sm',
    },
  },
})

export { textVariants }
export type TextVariantsProps = VariantProps<typeof textVariants>
