import { ContactDetails } from '@Server/manager/cms/cms-manager'
import { Entry } from 'contentful'

export type ContentfulContactDetails = {
  contactEmail: string
  gitHubUrl?: string
  linkedInUrl?: string
}

export function convertContactDetails(entry: Entry<ContentfulContactDetails>): ContactDetails {
  return {
    contactEmail: entry.fields.contactEmail,
    gitHubUrl: entry.fields.gitHubUrl,
    linkedInUrl: entry.fields.linkedInUrl
  }
}
