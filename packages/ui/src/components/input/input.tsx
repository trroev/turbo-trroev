import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { cn } from '@trroev/ui/cn'

import { inputVariants, type InputVariantProps } from './input.variants'

type InputProps = InputHTMLAttributes<HTMLInputElement> & InputVariantProps

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, radius, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ radius, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
export type { InputProps }
