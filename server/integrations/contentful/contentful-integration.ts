import { ContentfulClientApi, createClient } from 'contentful'

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID ?? ''
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
const CONTENTFUL_PREVIEW_ACCESS_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ?? ''
const CONTENTFUL_USE_PREVIEW_API = process.env.CONTENTFUL_USE_PREVIEW_API === 'true'
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT ?? ''

const CONTENTFUL_PREVIEW_HOST = 'preview.contentful.com'
export const CONTENTFUL_DEFAULT_SEARCH_DEPTH = 1

export enum ContentfulModel {
  COVER_PAGE = 'coverPage',
  EXPERIENCE_BLOCK = 'experienceBlock',
  TOOLTIP = 'tooltip',
  PROJECT = 'project',
  SKILL_SECTION = 'skillSection',
  SKILL = 'skill',
  CONTACT_DETAILS = 'contactDetails'
}

export const CONTENTFUL_MAX_STRING_LENGTH = 255

function getContentfulClient(): ContentfulClientApi {
  if (CONTENTFUL_USE_PREVIEW_API) {
    return createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      environment: CONTENTFUL_ENVIRONMENT,
      host: CONTENTFUL_PREVIEW_HOST
    })
  }
  return createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
    environment: CONTENTFUL_ENVIRONMENT
  })
}

export const Contentful = {
  getContentfulClient
}
