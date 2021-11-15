import { CoverPage } from '@Server/manager/cms/cms-manager'
import { Entry, Asset } from 'contentful'
import { ContentfulConverter } from '..'

type ContentfulCoverPage = {
  logoImage: Asset
  jobTitle: string
  blurb: string
  gitHubRepositoryUrl: string
  topListTitle: string
  topListItems: string[]
  bottomListTitle: string
  bottomListItems: string[]
}

export function convertCoverPage(entry: Entry<ContentfulCoverPage>): CoverPage {
  return {
    jobTitle: entry.fields.jobTitle,
    blurb: entry.fields.blurb,
    logoImage: ContentfulConverter.convertAsset(entry.fields.logoImage),
    gitHubRepositoryUrl: entry.fields.gitHubRepositoryUrl,
    topListTitle: entry.fields.topListTitle,
    topListItems: entry.fields.topListItems,
    bottomListTitle: entry.fields.bottomListTitle,
    bottomListItems: entry.fields.bottomListItems
  }
}
