'use client'

import { type FC } from 'react'
import { useRouter } from 'next/navigation'
import { RefreshRouteOnSave } from '@payloadcms/live-preview-react'

import { env } from '@trroev/env/payload'

export const ContentPagePreview: FC = () => {
  const router = useRouter()

  return (
    <RefreshRouteOnSave
      refresh={() => router.refresh()}
      serverURL={env.NEXT_PUBLIC_PAYLOAD_URL}
    />
  )
}
