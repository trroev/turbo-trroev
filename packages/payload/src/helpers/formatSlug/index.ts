export const formatSlug = (val: string): string =>
  val
    .replaceAll(' ', '-')
    .replaceAll(/[^\w-]+/g, '')
    .toLowerCase()
