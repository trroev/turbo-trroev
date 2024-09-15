import path from 'path'
import { fileURLToPath } from 'url'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig, deepMerge, type Config } from 'payload'

import { env } from '@trroev/env/payload'
import { Media } from '@trroev/payload/collections/Media'
import { Pages } from '@trroev/payload/collections/Page'
import { Users } from '@trroev/payload/collections/Users'
import { nestedDocsPlusPlugin } from '@trroev/payload/plugins/nestedDocsPlusPlugin'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const baseConfig: Config = {
  admin: {
    components: {
      graphics: {
        Icon: '@trroev/svg/Icon#Icon',
        Logo: '@trroev/svg/Logo#Logo',
      },
    },
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
  db: mongooseAdapter({
    url: env.PAYLOAD_PRIVATE_DATABASE_URI,
  }),
  editor: lexicalEditor(),
  plugins: [
    nestedDocsPlusPlugin({
      collections: ['pages'],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: docs =>
        docs.reduce((acc, doc) => `${acc}/${doc.slug as string}`, ''),
    }),
    redirectsPlugin({
      collections: ['pages'],
      overrides: {
        admin: {
          group: 'Site Config',
        },
        fields({ defaultFields }) {
          return [
            ...defaultFields,
            {
              defaultValue: '302',
              name: 'statusCode',
              options: [
                { label: 'Moved Permanently (301)', value: '301' },
                { label: 'Found (302)', value: '302' },
                { label: 'Temporary Redirect (307)', value: '307' },
                { label: 'Permanent Redirect (308)', value: '308' },
              ],
              required: true,
              type: 'select',
            },
          ]
        },
      },
    }),
    seoPlugin({
      collections: [Pages.slug],
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
