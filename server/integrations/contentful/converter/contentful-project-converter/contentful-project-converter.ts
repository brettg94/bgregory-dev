import { Document } from '@contentful/rich-text-types'
import { Project } from '@Server/manager/cms/cms-manager'
import { Entry, Asset } from 'contentful'
import { ContentfulConverter } from '..'

type ContentfulProject = {
  title: string
  logo: Asset
  url: string
  timeframe: string
  description: Document
  displayPriority: number
  primaryImage?: Asset
  gfycatEmbed?: string
}

export function convertProject(entry: Entry<ContentfulProject>): Project {
  return {
    title: entry.fields.title,
    logo: ContentfulConverter.convertAsset(entry.fields.logo),
    url: entry.fields.url,
    timeframe: entry.fields.timeframe,
    description: entry.fields.description,
    displayPriority: entry.fields.displayPriority,
    primaryImage: entry.fields.primaryImage ? ContentfulConverter.convertAsset(entry.fields.primaryImage) : undefined,
    gfycatEmbed: entry.fields.gfycatEmbed
  }
}
