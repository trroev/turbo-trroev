import type { ComponentPropsWithoutRef, FC } from 'react'

import { cn } from '@trroev/ui/cn'

import type { ConstrainerVariantsProps } from './Constrainer.variants'
import { constrainerVariants } from './Constrainer.variants'

type ConstrainerProps = ComponentPropsWithoutRef<'div'> &
  ConstrainerVariantsProps

const Constrainer: FC<ConstrainerProps> = ({ className, mode, ...rest }) => (
  <div className={cn(constrainerVariants({ mode }), className)} {...rest} />
)

export { Constrainer }
export type { ConstrainerProps }
