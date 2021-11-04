import { ContentfulClientApi, createClient } from 'contentful'

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID ?? ''
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN ?? ''
const CONTENTFUL_PREVIEW_ACCESS_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ?? ''
const CONTENTFUL_USE_PREVIEW_API = process.env.CONTENTFUL_USE_PREVIEW_API === 'true'
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT ?? ''

const CONTENTFUL_PREVIEW_HOST = 'preview.contentful.com'

export enum ContentfulModel {
  COVER_PAGE = 'coverPage'
}

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
