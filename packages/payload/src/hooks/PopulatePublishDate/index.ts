import { type CollectionBeforeChangeHook } from 'payload'

export const PopulatePublishDate: CollectionBeforeChangeHook = ({ data }) => {
  if (data.publishedDate) return undefined

  return {
    ...data,
    publishedDate: new Date(),
  }
}
