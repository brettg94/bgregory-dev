import { Contentful, ContentfulModel, CONTENTFUL_DEFAULT_SEARCH_DEPTH } from '@Server/integrations/contentful/contentful-integration'
import { Entry } from 'contentful'

export async function getAllEntriesOfModel<T>(
  model: ContentfulModel,
  converter: (rawResult: Entry<any>) => T,
  searchDepth: number = CONTENTFUL_DEFAULT_SEARCH_DEPTH
): Promise<T[]> {
  const entries = await Contentful.getContentfulClient().getEntries<T>({
    content_type: model,
    include: searchDepth
  })

  return entries.items.map(converter)
}
