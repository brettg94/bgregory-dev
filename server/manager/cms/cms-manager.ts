import { ContentfulModel } from '@Server/integrations/contentful/contentful-integration'
import { ContentfulConverter } from '@Server/integrations/contentful/converter'
import { CMSAsset } from '@Server/integrations/contentful/converter/contentful-asset-converter/contentful-asset-converter'
import { ContentfulOperations } from '@Server/integrations/operations'
import { Document } from '@contentful/rich-text-types'
import { ContentfulTooltip } from '@Server/integrations/contentful/converter/contentful-tooltip-converter/contentful-tooltip-converter'

export type CoverPage = {
  logoImage: CMSAsset
  jobTitle: string
  blurb: string
  topListTitle: string
  topListItems: string[]
  bottomListTitle: string
  bottomListItems: string[]
}

async function getCoverPage(): Promise<CoverPage> {
  return await ContentfulOperations.getSingletonEntry<CoverPage>(ContentfulModel.COVER_PAGE, ContentfulConverter.convertCoverPage)
}

export type ExperienceBlock = {
  company: string
  jobTitle: string
  location: string
  startMonthAndYear: string
  endMonthAndYear: string | undefined
  coverImage: CMSAsset
  details: Document
  displayPriority: number
}

async function getExperienceBlocks(): Promise<ExperienceBlock[]> {
  return await ContentfulOperations.getAllEntriesOfModel<ExperienceBlock>(ContentfulModel.EXPERIENCE_BLOCK, ContentfulConverter.convertExperienceBlock)
}

export type Tooltip = ContentfulTooltip

async function getTooltip(identifier: string): Promise<Tooltip> {
  return await ContentfulOperations.getEntryByField<Tooltip>(ContentfulModel.TOOLTIP, 'identifier', identifier, ContentfulConverter.convertTooltip)
}

export const CMSManager = {
  getCoverPage,
  getExperienceBlocks,
  getTooltip
}
