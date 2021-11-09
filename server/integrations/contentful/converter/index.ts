import { convertAsset } from './contentful-asset-converter/contentful-asset-converter'
import { convertCoverPage } from './contentful-cover-page-converter/contentful-cover-page-converter'
import { convertExperienceBlock } from './contentful-experience-block-converter/contentful-experience-block-converter'

export const ContentfulConverter = {
  convertAsset,
  convertCoverPage,
  convertExperienceBlock
}
