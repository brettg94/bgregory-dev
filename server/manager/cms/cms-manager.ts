import { ContentfulModel } from '@Server/integrations/contentful/contentful-integration'
import { ContentfulConverter } from '@Server/integrations/contentful/converter'
import { CMSAsset } from '@Server/integrations/contentful/converter/contentful-asset-converter/contentful-asset-converter'
import { ContentfulOperations } from '@Server/integrations/operations'
import { Document } from '@contentful/rich-text-types'
import { ContentfulTooltip } from '@Server/integrations/contentful/converter/contentful-tooltip-converter/contentful-tooltip-converter'
import { TooltipIdentifier } from '@Server/enum/enum'

export type CoverPage = {
  logoImage: CMSAsset
  jobTitle: string
  blurb: string
  gitHubRepositoryUrl: string
  topListTitle: string
  topListItems: string[]
  bottomListTitle: string
  bottomListItems: string[]
}

export type CoverPageWithContactDetails = CoverPage & ContactDetails

async function getCoverPage(): Promise<CoverPage> {
  const coverPage = await ContentfulOperations.getSingletonEntry<CoverPage>(ContentfulModel.COVER_PAGE, ContentfulConverter.convertCoverPage)
  const contactDetails = await getContactDetails()
  return {
    ...coverPage,
    ...contactDetails
  }
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

export type Tooltip = Omit<ContentfulTooltip, 'identifier'> & { identifier: TooltipIdentifier }

async function getTooltip(identifier: string): Promise<Tooltip> {
  return await ContentfulOperations.getEntryByField<Tooltip>(ContentfulModel.TOOLTIP, 'identifier', identifier, ContentfulConverter.convertTooltip)
}

export type Project = {
  title: string
  logo: CMSAsset
  url?: string
  timeframe: string
  description: Document
  displayPriority: number
  primaryImage?: CMSAsset
  gfycatEmbed?: string
}

async function getProjects(): Promise<Project[]> {
  return await ContentfulOperations.getAllEntriesOfModel(ContentfulModel.PROJECT, ContentfulConverter.convertProject)
}

export type Skill = {
  title: string
  tooltipIdentifier?: string
}

export type SkillSection = {
  title: string
  skills: Skill[]
  displayPriority: number
}

async function getSkillSectionsWithSkills(): Promise<SkillSection[]> {
  return await ContentfulOperations.getAllEntriesOfModel(ContentfulModel.SKILL_SECTION, ContentfulConverter.convertSkillSection, 2)
}

export type ContactDetails = {
  contactEmail: string
  gitHubUrl?: string
  linkedInUrl?: string
}

async function getContactDetails(): Promise<ContactDetails> {
  return await ContentfulOperations.getSingletonEntry(ContentfulModel.CONTACT_DETAILS, ContentfulConverter.convertContactDetails)
}

export const CMSManager = {
  getCoverPage,
  getExperienceBlocks,
  getTooltip,
  getProjects,
  getSkillSectionsWithSkills,
  getContactDetails
}
