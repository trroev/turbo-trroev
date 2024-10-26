import { NextResponse } from 'next/server'

import { type Redirect } from '@trroev/types/Redirect'

type RedirectMiddlewareProps = {
  getRedirectResponse: (pathname: string) => Promise<Redirect | undefined>
  req: Request
}

export const redirectMiddleware = async (props: RedirectMiddlewareProps) => {
  const { getRedirectResponse, req } = props
  if (!req.url) {
    return NextResponse.next()
  }

  const origin = new URL(req.url)
  const { pathname, search } = origin

  const redirect = await getRedirectResponse(pathname)

  if (!redirect) {
    return NextResponse.next()
  }

  const destination = new URL(redirect.destinationUrl)
  if (redirect.includeSearchParams) {
    destination.search = search
  }

  return NextResponse.redirect(destination, {
    status: redirect.statusCode,
  })
}
