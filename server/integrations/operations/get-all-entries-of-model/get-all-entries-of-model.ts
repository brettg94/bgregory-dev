import { Contentful, ContentfulModel } from '@Server/integrations/contentful/contentful-integration'
import { Entry } from 'contentful'

export async function getAllEntriesOfModel<T>(model: ContentfulModel, converter: (rawResult: Entry<any>) => T): Promise<T[]> {
  const entries = await Contentful.getContentfulClient().getEntries<T>({
    content_type: model
  })

  return entries.items.map(converter)
}
