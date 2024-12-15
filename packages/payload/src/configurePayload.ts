import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Config } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig, deepMerge } from 'payload'

import { env } from '@trroev/env/payload'
import { Media } from '@trroev/payload/collections/Media'
import { Pages } from '@trroev/payload/collections/Pages'
import { Users } from '@trroev/payload/collections/Users'
import { nestedDocsPlusPlugin } from '@trroev/payload/plugins/nestedDocsPlusPlugin'
import { isObject } from '@trroev/utils/isObject'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const baseConfig: Config = {
  admin: {
    meta: {
      icons: [
        {
          rel: 'shortcut icon',
          url: '/favicon.ico',
        },
      ],
      titleSuffix: ' | trroev CMS',
    },
    user: Users.slug,
  },
  collections: [Pages, Users, Media],
  db:
    env.PAYLOAD_PRIVATE_DATABASE_ENGINE === 'mongo'
      ? mongooseAdapter({
          url: env.PAYLOAD_PRIVATE_DATABASE_URI,
        })
      : sqliteAdapter({
          client: {
            // url: env.PAYLOAD_PRIVATE_DATABASE_URI,
            url: `file:${path.join(dirname, 'local.db')}`,
          },
        }),
  editor: lexicalEditor(),
  plugins: [
    nestedDocsPlusPlugin({
      breadcrumbsFieldSlug: 'breadcrumbs',
      collections: ['pages'],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: docs =>
        docs.reduce((acc, doc) => `${acc}/${doc.slug as string}`, ''),
      parentFieldSlug: 'parent',
    }),
    redirectsPlugin({
      collections: [Pages.slug],
      overrides: {
        admin: {
          group: 'Site Config',
        },
      },
      redirectTypes: ['301', '302', '307', '308'],
    }),
    seoPlugin({
      collections: [Pages.slug],
      generateTitle: ({ doc }) =>
        isObject(doc) && 'title' in doc && typeof doc.title === 'string'
          ? doc.title
          : '',
      tabbedUI: true,
      uploadsCollection: Media.slug,
    }),
  ],
  secret: env.PAYLOAD_PRIVATE_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload.types.ts'),
  },
}

export const configurePayload = (overrides?: Partial<Config>) => {
  return buildConfig(deepMerge(baseConfig, overrides ?? {}))
}
