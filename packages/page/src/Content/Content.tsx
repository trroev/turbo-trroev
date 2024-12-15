import type { Metadata } from 'next'
import type { FC } from 'react'
import { cache } from 'react'
import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import { BlockRenderer } from '@trroev/payload/components/BlockRenderer'
import config from '@trroev/payload/payload-config'

import { ContentPagePreview } from './ContentPagePreview'

type ContentPageProps = {
  params: Promise<{ slug?: string[] }>
  searchParams: Promise<{
    isLivePreview?: string
  }>
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
  params,
  searchParams,
}: ContentPageProps): Promise<Metadata> => {
  const { slug } = await params
  const { isLivePreview } = await searchParams
  const page = await getPage(slug, Boolean(isLivePreview))

  if (!page?.meta) {
    return {}
  }

  return page.meta
}

export const generateStaticParams = async (): Promise<
  Awaited<NonNullable<ContentPageProps['params']>>[]
> => {
  const pages = await getPages()

  return pages
    .filter(page => page.slug)
    .map(page => ({
      slug: page.slug === '' ? [''] : [page.slug ?? ''],
    }))
}

export const ContentPage: FC<ContentPageProps> = async ({
  params,
  searchParams,
}) => {
  const { slug } = await params
  const { isLivePreview } = await searchParams
  const page = await getPage(slug, Boolean(isLivePreview))

  if (!page) {
    return notFound()
  }

  return (
    <main className="grow">
      <ContentPagePreview />
      <BlockRenderer blocks={page.blocks} />
    </main>
  )
}
