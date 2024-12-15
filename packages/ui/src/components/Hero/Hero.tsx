import type { ComponentPropsWithoutRef, FC } from 'react'
import Image from 'next/image'

import type { TextLockupProps } from '@trroev/ui/TextLockup'
import { cn } from '@trroev/ui/cn'
import { Constrainer } from '@trroev/ui/Constrainer'
import { TextLockup } from '@trroev/ui/TextLockup'

type HeroProps = {
  image?: {
    alt: string
    src: string
  }
} & ComponentPropsWithoutRef<'section'> &
  TextLockupProps

const Hero: FC<HeroProps> = ({
  body,
  callsToAction = [],
  className,
  eyebrow,
  heading,
  image,
  ...rest
}) => {
  const textLockupProps = { body, callsToAction, eyebrow, heading }

  return (
    <section
      className={cn(
        'relative flex min-h-dvh w-full flex-col justify-center',
        className,
      )}
      {...rest}
    >
      <Constrainer className="z-10">
        <TextLockup color={image && 'inverse'} {...textLockupProps} />
      </Constrainer>
      {image && (
        <Image
          alt={image.alt}
          className={cn('absolute inset-0 object-cover brightness-50')}
          layout="fill"
          priority
          src={image.src}
        />
      )}
    </section>
  )
}

export { Hero }
export type { HeroProps }
