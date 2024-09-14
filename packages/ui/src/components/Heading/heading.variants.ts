import { cva, type VariantProps } from 'class-variance-authority'

const headingVariants = cva('scroll-m-20 tracking-tight', {
  variants: {
    display: {
      h1: 'text-4xl font-extrabold md:text-5xl lg:text-6xl',
      h2: 'text-3xl font-bold md:text-4xl lg:text-5xl',
      h3: 'text-2xl font-semibold md:text-3xl lg:text-4xl',
      h4: 'text-xl font-semibold md:text-2xl lg:text-3xl',
      h5: 'text-lg font-semibold md:text-xl lg:text-2xl',
      h6: 'text-base font-semibold md:text-lg lg:text-xl',
    },
  },
  defaultVariants: {
    display: 'h1',
  },
})

export { headingVariants }
export type HeadingVariantsProps = VariantProps<typeof headingVariants>
