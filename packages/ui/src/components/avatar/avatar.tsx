'use client'

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@shared/ui/cn'

import { avatarVariants, type AvatarVariantProps } from './avatar.variants'

type AvatarProps = {
  img?: {
    src: string
    alt: string
  }
  fallback: string
} & ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
  AvatarVariantProps

type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>

type AvatarFallbackProps = ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
>

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square size-full', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex size-full items-center justify-center rounded-full bg-muted',
      className,
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, fallback, img, radius, size, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ radius, size }), className)}
      {...props}
    >
      {img && <AvatarImage src={img.src} alt={img.alt} />}
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarPrimitive.Root>
  ),
)
Avatar.displayName = AvatarPrimitive.Root.displayName

export { Avatar, AvatarImage, AvatarFallback }
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps }
