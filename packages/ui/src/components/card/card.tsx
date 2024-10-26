import { forwardRef, type HTMLAttributes } from 'react'

import { cn } from '@trroev/ui/cn'
import { Heading } from '@trroev/ui/Heading'

import { cardVariants, type CardVariantProps } from './card.variants'

type CardProps = HTMLAttributes<HTMLDivElement> & CardVariantProps

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, isBlurred, radius, shadow, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, isBlurred, radius, shadow, className }),
      )}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  ),
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <Heading as="h3" ref={ref} className={cn(className)} {...props}>
    {children}
  </Heading>
))
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  ),
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
export type { CardProps }
