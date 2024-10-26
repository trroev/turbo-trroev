import { cache, type FC } from 'react'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import config from '@trroev/payload/payload-config'

import { ContentPagePreview } from './content-page-preview'

type ContentPageProps = {
  params: { slug?: string[] }
  searchParams: {
    isLivePreview?: string
  }
}

const getPage = cache(async (slug?: string[], isLivePreview?: boolean) => {
  const payload = await getPayloadHMR({ config })
  const pathname = `/${slug?.join('/') ?? ''}`
  const response = await payload.find({
    collection: 'pages',
    draft: isLivePreview === true,
    where: { pathname: { equals: pathname } },
  })

  return response.docs[0]
})

const getPages = cache(async () => {
  const payload = await getPayloadHMR({ config })
  const response = await payload.find({ collection: 'pages' })

  return response.docs
})

export const generateMetadata = async ({
  params: { slug },
  searchParams: { isLivePreview },
}: ContentPageProps): Promise<Metadata> => {
  const page = await getPage(slug, Boolean(isLivePreview))

  if (!page?.meta) {
    return {}
  }

  return page.meta
}

export const generateStaticParams = async (): Promise<
  NonNullable<ContentPageProps['params']>[]
> => {
  const pages = await getPages()

  return pages
    .filter(page => page.slug)
    .map(page => ({
      slug: page.slug === '' ? [''] : [page.slug ?? ''],
    }))
}

export const ContentPage: FC<ContentPageProps> = async ({
  params: { slug },
  searchParams: { isLivePreview },
}) => {
  const page = await getPage(slug, Boolean(isLivePreview))

  if (!page) {
    return notFound()
  }

  return (
    <>
      <ContentPagePreview />
      {/* <BlockRenderer blocks={page.blocks} /> */}
    </>
  )
}
