import React from 'react'
import { Chip, IconButton, Link } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import styles from './cover-page.module.scss'
import { TooltipButton } from '../tooltip-button/tooltip-button-container'
import { TooltipIdentifier } from '@Server/enum/enum'
import { CoverPageWithContactDetails } from '@Server/manager/cms/cms-manager'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { ContactEmailIconButton } from '../contact-email-icon-button/contact-email-icon-button-ui'

type Props = CoverPageWithContactDetails

export const CoverPageUI = React.memo((props: Props) => {
  const getContactIcons = () => {
    const icons = []
    if (props.contactEmail) {
      icons.push(<ContactEmailIconButton contactEmail={props.contactEmail} />)
    }
    if (props.gitHubUrl) {
      icons.push(
        <IconButton component={Link} href={props.gitHubUrl}>
          <GitHubIcon fontSize="large" />
        </IconButton>
      )
    }
    if (props.linkedInUrl) {
      icons.push(
        <IconButton component={Link} href={props.linkedInUrl}>
          <LinkedInIcon fontSize="large" />
        </IconButton>
      )
    }
    return icons
  }

  return (
    <div className={styles.container}>
      <div className={styles.interior}>
        <div className={styles.tagline}>
          <img className={styles.logoImage} src={props.logoImage.url} title={props.logoImage.title} alt={props.logoImage.description}></img>
          <div className={styles.jobTitle}>{props.jobTitle}</div>
          <div className={styles.blurb}>{props.blurb}</div>
          <div className={styles.contactIconsContainer}>{...getContactIcons()}</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.skillset}>
          <h3 className={styles.sectionTitle}>{props.topListTitle}</h3>
          <div className={styles.chipContainer}>
            {props.topListItems.map((item) => (
              <Chip color="primary" key={item} label={item}></Chip>
            ))}
          </div>
          <h3 className={styles.secondSectionTitle}>{props.bottomListTitle}</h3>
          <div className={styles.chipContainer}>
            {props.bottomListItems.map((item) => (
              <Chip color="secondary" key={item} label={item}></Chip>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottomDisclaimer}>
        <Link href={props.gitHubRepositoryUrl}>Click here to view this website's source on GitHub.</Link>
        <p>
          I built this site with Node.js and React to serve as both a resume and live portfolio piece. Click on any "
          <TooltipButton identifier={TooltipIdentifier.COVER_PAGE} />" you see to get design and implementation rationale for specific features.
        </p>
        <ArrowDownwardIcon className={styles.arrowDownward} />
      </div>
    </div>
  )
})
