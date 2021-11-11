import { Contentful, ContentfulModel } from '@Server/integrations/contentful/contentful-integration'
import { Entry } from 'contentful'

export async function getSingletonEntry<T>(model: ContentfulModel, converter: (rawResult: Entry<any>) => T): Promise<T> {
  const entries = await Contentful.getContentfulClient().getEntries<T>({
    content_type: model
  })

  if (entries.items.length !== 1) {
    throw new Error(`Contentful error: expected exactly one entry for model ${model}, but got: ${entries.items.length}`)
  }

  return converter(entries.items[0])
}
