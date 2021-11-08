import { ExperienceBlock } from '@Server/manager/cms/cms-manager'
import { Entry, Asset } from 'contentful'
import { convertAsset } from '../contentful-asset-converter/contentful-asset-converter'

type ContentfulExperienceBlock = {
  company: string
  jobTitle: string
  location: string
  startMonthAndYear: string
  endMonthAndYear: string | undefined
  coverImage: Asset
  details: string
}

export function convertExperienceBlock(entry: Entry<ContentfulExperienceBlock>): ExperienceBlock {
  return {
    company: entry.fields.company,
    jobTitle: entry.fields.jobTitle,
    location: entry.fields.location,
    startMonthAndYear: entry.fields.startMonthAndYear,
    endMonthAndYear: entry.fields.endMonthAndYear,
    coverImage: convertAsset(entry.fields.coverImage),
    details: entry.fields.details
  }
}
