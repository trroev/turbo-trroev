import { type FieldHook } from 'payload'

const format = (val: string): string => {
  const withoutInitialSlash = val.startsWith('/') ? val.slice(1) : val

  return `${withoutInitialSlash
    .replace(/ /g, '-')
    .replace(/[^\w/-]+/g, '')
    .toLowerCase()}`
}

const isObject = (val: unknown): val is Record<string, unknown> =>
  typeof val === 'object' && val !== null

export const FormatSlug =
  (fallback: string): FieldHook =>
  ({ data, operation, originalDoc, value }) => {
    if (typeof value === 'string') {
      return format(value)
    }

    if (operation === 'create') {
      const docFallback =
        isObject(data) &&
        fallback in data &&
        data[fallback] &&
        typeof data[fallback] === 'string'
          ? data[fallback]
          : undefined

      const originalDocFallback =
        isObject(originalDoc) &&
        fallback in originalDoc &&
        originalDoc[fallback] &&
        typeof originalDoc[fallback] === 'string'
          ? originalDoc[fallback]
          : undefined

      const fallbackData = docFallback ?? originalDocFallback

      if (fallbackData && typeof fallbackData === 'string') {
        return format(fallbackData)
      }
    }

    return `${value}`
  }
