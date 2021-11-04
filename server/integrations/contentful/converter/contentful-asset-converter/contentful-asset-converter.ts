import { Asset } from 'contentful'

export type CMSAsset = {
  title: string
  description: string
  url: string
}

export function convertAsset(entry: Asset): CMSAsset {
  return {
    title: entry.fields.title,
    description: entry.fields.description,
    url: entry.fields.file.url
  }
}
