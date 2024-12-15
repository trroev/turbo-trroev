import type { FC, ReactNode } from 'react'
import { match } from 'ts-pattern'

import type { Page } from '@trroev/payload/payload-types'
import { Hero } from '@trroev/payload/components/Hero'

export type Blocks = Page['blocks']

const BlockRenderer: FC<{
  blocks: Blocks
}> = ({ blocks }) => {
  return blocks?.map(data =>
    match(data)
      .returnType<ReactNode>()
      .with({ blockType: 'Hero' }, props => <Hero key={props.id} {...props} />)
      .exhaustive(),
  )
}

export { BlockRenderer }
