import { ContactDetails } from '@Server/manager/cms/cms-manager'
import { Entry } from 'contentful'

export type ContentfulContactDetails = {
  contactEmail: string
  gitHub?: string
  linkedIn?: string
}

export function convertContactDetails(entry: Entry<ContentfulContactDetails>): ContactDetails {
  return {
    contactEmail: entry.fields.contactEmail,
    gitHub: entry.fields.gitHub,
    linkedIn: entry.fields.linkedIn
  }
}
