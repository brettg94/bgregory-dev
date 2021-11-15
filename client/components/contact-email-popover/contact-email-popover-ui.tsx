import React from 'react'
import { Link, Popover } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import styles from './contact-email-popover.module.scss'

type Props = {
  open: boolean
  anchorEl: Element
  onClose: () => void
  contactEmail: string
}

export const ContactEmailPopover = (props: Props) => {
  return (
    <Popover
      id={'contact-email-popover'}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    >
      <Link href={`mailto:${props.contactEmail}`} className={styles.container}>
        <SendIcon fontSize="small" className={styles.icon} />
        {props.contactEmail}
      </Link>
    </Popover>
  )
}
