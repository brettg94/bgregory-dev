import { Tooltip } from '@Server/manager/cms/cms-manager'
import { Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'
import { TooltipIdentifier } from '@Server/enum/enum'

export type ContentfulTooltip = {
  identifier: string
  title?: string
  content: Document
}

export function convertTooltip(entry: Entry<ContentfulTooltip>): Tooltip {
  return {
    identifier: entry.fields.identifier as TooltipIdentifier,
    content: entry.fields.content,
    title: entry.fields.title
  }
}
