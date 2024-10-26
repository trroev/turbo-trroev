import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import {
  type CollectionBeforeChangeHook,
  type CollectionSlug,
  type Config,
  type Plugin,
} from 'payload'

import { isObject } from '@trroev/utils/isObject'

const setPathnameHook: CollectionBeforeChangeHook = ({ data }) => {
  if (
    isObject(data) &&
    'breadcrumbs' in data &&
    Array.isArray(data.breadcrumbs)
  ) {
    const lastBreadcrumb: unknown =
      data.breadcrumbs[data.breadcrumbs.length - 1]

    if (
      isObject(lastBreadcrumb) &&
      'url' in lastBreadcrumb &&
      typeof lastBreadcrumb.url === 'string'
    ) {
      data.pathname = lastBreadcrumb.url.replace(/^\/*/g, '/')
    }
  }
}

export const nestedDocsPlusPlugin =
  (...params: Parameters<typeof nestedDocsPlugin>): Plugin =>
  async incomingConfig => {
    const [pluginConfig] = params

    const nestedDocsConfig =
      await nestedDocsPlugin(pluginConfig)(incomingConfig)

    const config: Config = {
      ...nestedDocsConfig,
      collections: (nestedDocsConfig.collections ?? []).map(collection => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        const fields = [...(collection.fields ?? [])]

        if (pluginConfig.collections.includes(collection.slug)) {
          fields.push({
            admin: {
              position: 'sidebar',
              readOnly: true,
            },
            label: 'Route Path',
            name: 'pathname',
            type: 'text',
          })
        }

        return {
          ...collection,
          fields,
          hooks: {
            ...(collection.hooks ?? {}),
            beforeChange: [
              ...(collection.hooks?.beforeChange ?? []),
              setPathnameHook,
            ],
          },
        }
      }),
      onInit: async payload => {
        if (incomingConfig.onInit) await incomingConfig.onInit(payload)

        for (const collectionName of pluginConfig.collections) {
          const docsToUpdate = await payload.find({
            collection: collectionName as CollectionSlug,
            depth: 1,
            limit: 0,
            where: {
              pathname: {
                exists: false,
              },
            },
          })

          for (const doc of docsToUpdate.docs) {
            await payload.update({
              collection: collectionName as CollectionSlug,
              data: {
                ...doc,
              },
              id: doc.id,
            })
          }
        }
      },
    }

    return config
  }
