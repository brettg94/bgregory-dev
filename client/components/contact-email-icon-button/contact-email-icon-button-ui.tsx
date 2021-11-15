import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import { ContactEmailPopover } from '../contact-email-popover/contact-email-popover-ui'
import { IconButton } from '@mui/material'

type Props = {
  contactEmail: string
}

export const ContactEmailIconButton = (props: Props) => {
  const [contactEmailAnchor, setContactEmailAnchor] = React.useState<Element | undefined>(undefined)

  const handleContactEmailClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setContactEmailAnchor(event.currentTarget)
  }

  const handleContactEmailClose = () => {
    setContactEmailAnchor(undefined)
  }
  return (
    <>
      <IconButton onClick={handleContactEmailClick}>
        <EmailIcon fontSize="large" />
      </IconButton>
      <ContactEmailPopover
        open={Boolean(contactEmailAnchor)}
        anchorEl={contactEmailAnchor!}
        onClose={handleContactEmailClose}
        contactEmail={props.contactEmail}
      />
    </>
  )
}
