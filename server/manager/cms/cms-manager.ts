import { ContentfulModel } from '@Server/integrations/contentful/contentful-integration'
import { ContentfulConverter } from '@Server/integrations/contentful/converter'
import { CMSAsset } from '@Server/integrations/contentful/converter/contentful-asset-converter/contentful-asset-converter'
import { ContentfulOperations } from '@Server/integrations/operations'

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

export const CMSManager = {
  getCoverPage
}