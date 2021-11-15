import React from 'react'
import { ContactEmailButton } from '../contact-email-button/contact-email-button-ui'
import styles from './contact-page.module.scss'

export type Props = {
  contactEmail: string
}

export const ContactPageUI = (props: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>CONTACT</h2>
      <div className={styles.interior}>
        <p>Feel free to send me a message at:</p>
        <ContactEmailButton buttonType="PROMPT" contactEmail={props.contactEmail} />
      </div>
      <p className={styles.copyright}>© Brett Gregory {new Date().getFullYear()}</p>
    </div>
  )
}
