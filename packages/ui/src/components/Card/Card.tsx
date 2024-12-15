import type { ComponentPropsWithRef, ComponentRef, HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { cn } from '@trroev/ui/cn'
import { Heading } from '@trroev/ui/Heading'

import type { CardVariantProps } from './Card.variants'
import { cardVariants } from './Card.variants'

type CardProps = CardVariantProps & HTMLAttributes<HTMLDivElement>

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, isBlurred, radius, shadow, variant, ...props }, ref) => (
    <div
      className={cn(
        cardVariants({ className, isBlurred, radius, shadow, variant }),
      )}
      ref={ref}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      ref={ref}
      {...props}
    />
  ),
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<
  ComponentRef<'h3'>,
  ComponentPropsWithRef<typeof Heading>
>(({ as = 'h3', children, className, color, ...props }, ref) => (
  <Heading as={as} className={cn(className)} color={color} ref={ref} {...props}>
    {children}
  </Heading>
))
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={cn('text-sm text-muted-foreground', className)}
    ref={ref}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn('p-6 pt-0', className)} ref={ref} {...props} />
  ),
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('flex items-center p-6 pt-0', className)}
      ref={ref}
      {...props}
    />
  ),
)
CardFooter.displayName = 'CardFooter'

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
export type { CardProps }
