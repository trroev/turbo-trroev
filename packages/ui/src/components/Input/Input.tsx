import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { cn } from '@trroev/ui/cn'

import type { InputVariantProps } from './Input.variants'
import { inputVariants } from './Input.variants'

type InputProps = InputHTMLAttributes<HTMLInputElement> & InputVariantProps

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, radius, type, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ className, radius }))}
        ref={ref}
        type={type}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
export type { InputProps }
