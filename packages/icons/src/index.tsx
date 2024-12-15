import type { LucideProps } from 'lucide-react'
import type { FC } from 'react'
import { createElement } from 'react'

import * as Icons from './icons'

export const ArrayIcon = Object.keys(Icons)

export type IconName = keyof typeof Icons

const NamedIcons: Record<IconName, FC> = Icons

export const Icon = (props: { name?: IconName } & LucideProps) => {
  const { name, ...rest } = props

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!name || !NamedIcons[name]) {
    // eslint-disable-next-line no-console
    console.error(`Icon ${JSON.stringify(name)} not found`)
    return null
  }

  return createElement(NamedIcons[name], rest)
}
