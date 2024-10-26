import { isObject } from '@trroev/utils/isObject'

type RecursivelyReplaceNullWithUndefined<T> = T extends null
  ? undefined
  : T extends Date
    ? T
    : {
        [K in keyof T]: T[K] extends (infer U)[]
          ? RecursivelyReplaceNullWithUndefined<U>[]
          : RecursivelyReplaceNullWithUndefined<T[K]>
      }

export function replaceNullsWithUndefined<
  T extends null | Record<string, unknown>,
>(obj: T): RecursivelyReplaceNullWithUndefined<T> {
  if (obj === null) {
    return undefined as RecursivelyReplaceNullWithUndefined<T>
  }

  const newObj: Record<string, unknown> = {}

  Object.keys(obj).forEach(key => {
    if (typeof obj !== 'object') {
      return
    }

    const value = obj[key]

    if (value === null) {
      newObj[key] = undefined
    } else if (Array.isArray(value)) {
      newObj[key] = value.map(replaceNullsWithUndefined)
    } else if (isObject(value)) {
      newObj[key] = replaceNullsWithUndefined(value)
    } else {
      newObj[key] = value
    }
  })

  return newObj as RecursivelyReplaceNullWithUndefined<T>
}
