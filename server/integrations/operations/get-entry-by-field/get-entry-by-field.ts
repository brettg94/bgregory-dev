import { Contentful, ContentfulModel, CONTENTFUL_DEFAULT_SEARCH_DEPTH } from '@Server/integrations/contentful/contentful-integration'
import { Entry } from 'contentful'

export async function getEntryByField<T>(
  model: ContentfulModel,
  fieldName: string,
  fieldValue: string,
  converter: (rawResult: Entry<any>) => T,
  searchDepth: number = CONTENTFUL_DEFAULT_SEARCH_DEPTH
): Promise<T> {
  const entries = await Contentful.getContentfulClient().getEntries<T>({
    content_type: model,
    [`fields.${fieldName}`]: fieldValue,
    include: searchDepth
  })

  if (entries.items.length !== 1) {
    throw new Error(`Contentful error: expected exactly one entry for ${fieldName} === ${fieldValue} on model ${model}, but got: ${entries.items.length}`)
  }

  return converter(entries.items[0])
}
