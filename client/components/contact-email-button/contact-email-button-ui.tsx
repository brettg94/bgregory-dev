import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import { ContactEmailPopover } from '../contact-email-popover/contact-email-popover-ui'
import { Button, IconButton } from '@mui/material'

type Props = {
  contactEmail: string
  buttonType?: 'PROMPT' | 'ICON'
}

export const ContactEmailButton = (props: Props) => {
  const [contactEmailAnchor, setContactEmailAnchor] = React.useState<Element | undefined>(undefined)

  const handleContactEmailClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setContactEmailAnchor(event.currentTarget)
  }

  const handleContactEmailClose = () => {
    setContactEmailAnchor(undefined)
  }

  const getButton = () => {
    if (props.buttonType === 'ICON') {
      return (
        <IconButton onClick={handleContactEmailClick}>
          <EmailIcon fontSize="large" />
        </IconButton>
      )
    }

    return (
      <Button color="primary" variant="contained" onClick={handleContactEmailClick}>
        SHOW EMAIL
      </Button>
    )
  }

  return (
    <>
      {getButton()}
      <ContactEmailPopover
        open={Boolean(contactEmailAnchor)}
        anchorEl={contactEmailAnchor!}
        onClose={handleContactEmailClose}
        contactEmail={props.contactEmail}
      />
    </>
  )
}
