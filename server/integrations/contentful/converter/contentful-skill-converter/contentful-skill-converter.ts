import { Skill } from '@Server/manager/cms/cms-manager'
import { Entry } from 'contentful'
import { ContentfulTooltip } from '../contentful-tooltip-converter/contentful-tooltip-converter'

export type ContentfulSkill = {
  title: string
  tooltip?: Entry<ContentfulTooltip>
}

export function convertSkill(entry: Entry<ContentfulSkill>): Skill {
  return {
    title: entry.fields.title,
    //No need to pass a ton of tooltip data over the wire. Instead, pass down the identifier and the client's tooltip system can request them individually if needed.
    tooltipIdentifier: entry.fields.tooltip?.fields?.identifier
  }
}
