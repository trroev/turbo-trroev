import type { FC } from 'react'

import type { HeroBlock, Media } from '@trroev/payload/payload-types'
import type { LinkType } from '@trroev/ui/types/LinkType'
import { replaceNullsWithUndefined } from '@trroev/payload/helpers/replaceNullsWithUndefined'
import { Hero as HeroUI } from '@trroev/ui/Hero'

type HeroProps = HeroBlock

const Hero: FC<HeroProps> = ({ ...props }) => {
  const { backgroundImage, body, callsToAction, eyebrow, heading, subheading } =
    replaceNullsWithUndefined(props)
  const imageObject = backgroundImage as Media

  return (
    <HeroUI
      body={body}
      callsToAction={
        callsToAction && callsToAction.length > 0
          ? (callsToAction.reduce<LinkType[]>((acc, { id, link }) => {
              return [
                ...acc,
                {
                  href: link.url ?? '',
                  id: id ?? '',
                  label: link.label,
                  target: link.openInNewTab ? '_blank' : '_self',
                },
              ]
            }, []) as [] | [LinkType, LinkType] | [LinkType])
          : undefined
      }
      eyebrow={eyebrow}
      heading={heading}
      image={{
        alt: imageObject.alt,
        src: imageObject.url ?? '',
      }}
      subHeading={subheading}
    />
  )
}

export { Hero }
export type { HeroProps }
