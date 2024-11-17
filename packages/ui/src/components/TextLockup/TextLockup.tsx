import type { ComponentPropsWithoutRef, FC } from 'react'
import Link from 'next/link'

import type { IconName } from '@trroev/icons'
import type { LinkType } from '@trroev/ui/types/LinkType'
import { Icon } from '@trroev/icons'
import { Button } from '@trroev/ui/Button'
import { cn } from '@trroev/ui/cn'
import { Eyebrow } from '@trroev/ui/Eyebrow'
import { Heading } from '@trroev/ui/Heading'
import { Text } from '@trroev/ui/Text'

import type { TextLockupVariantsProps } from './TextLockup.variants'
import { textLockupVariants } from './TextLockup.variants'

type TextLockupProps = {
  body?: string
  callsToAction?: [] | [LinkType, LinkType] | [LinkType]
  eyebrow?: string
  heading?: string
  icon?: IconName
  subHeading?: string
} & ComponentPropsWithoutRef<'div'> &
  TextLockupVariantsProps

const TextLockup: FC<TextLockupProps> = ({
  body,
  callsToAction = [],
  className,
  eyebrow,
  heading,
  icon,
  kind,
  subHeading,
  ...rest
}) => {
  const headingType = kind === 'small' ? 'h5' : 'h2'
  const subHeadingType = kind === 'small' ? 'h6' : 'h5'
  const textSize = kind === 'small' && 'text-sm'

  if (callsToAction.length > 2) {
    // eslint-disable-next-line no-console
    console.warn('TextLockup: Only up to 2 calls-to-action are allowed.')
  }

  return (
    <div className={cn(textLockupVariants({ kind }), className)} {...rest}>
      <div className={cn('flex flex-col gap-4', kind === 'small' && 'gap-2')}>
        <div className="flex flex-col gap-2">
          {icon && <Icon className="size-8" name={icon} />}
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {heading && <Heading as={headingType}>{heading}</Heading>}
          {subHeading && <Heading as={subHeadingType}>{subHeading}</Heading>}
        </div>
        {body && <Text className={cn('max-w-prose', textSize)}>{body}</Text>}
      </div>
      {callsToAction.length > 0 && (
        <div className="flex gap-4">
          {callsToAction.slice(0, 2).map(cta => (
            <Button asChild key={cta.id}>
              <Link
                href={cta.href}
                prefetch={false}
                replace={false}
                scroll={true}
                target={cta.target}
              >
                {cta.label}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export { TextLockup }
export type { TextLockupProps }
