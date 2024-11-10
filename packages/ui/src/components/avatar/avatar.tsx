'use client'

import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '@trroev/ui/cn'

import type { AvatarVariantProps } from './Avatar.variants'
import { avatarVariants } from './Avatar.variants'

type AvatarProps = {
  fallback: string
  img?: {
    alt: string
    src: string
  }
} & AvatarVariantProps &
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>

type AvatarFallbackProps = ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
>

const AvatarImage = forwardRef<
  ComponentRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    className={cn('aspect-square size-full', className)}
    ref={ref}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
  ComponentRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    className={cn(
      'flex size-full items-center justify-center rounded-full bg-muted',
      className,
    )}
    ref={ref}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

const Avatar = forwardRef<
  ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, fallback, img, radius, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    className={cn(avatarVariants({ className, radius, size }))}
    ref={ref}
    {...props}
  >
    {img && <AvatarImage alt={img.alt} src={img.src} />}
    <AvatarFallback>{fallback}</AvatarFallback>
  </AvatarPrimitive.Root>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

export { Avatar, AvatarFallback, AvatarImage }
export type { AvatarFallbackProps, AvatarImageProps, AvatarProps }
