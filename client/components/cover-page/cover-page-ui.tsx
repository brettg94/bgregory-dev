import { Chip } from '@mui/material'
import { CoverPage as CoverPageType } from '@Server/manager/cms/cms-manager'
import React from 'react'
import styles from './cover-page.module.scss'

type Props = CoverPageType

//Memoize, is a pure function
export const CoverPageUI = React.memo((props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.interior}>
        <div className={styles.tagline}>
          <img className={styles.logoImage} src={props.logoImage.url} title={props.logoImage.title} alt={props.logoImage.description}></img>
          <div className={styles.jobTitle}>{props.jobTitle}</div>
          <div className={styles.blurb}>{props.blurb}</div>
        </div>
        <div className={styles.divider}></div>
        <div>
          <h3 className={styles.sectionTitle}>{props.topListTitle}</h3>
          <div className={styles.chipContainer}>
            {props.topListItems.map((item) => (
              <Chip color="primary" key={item} label={item}></Chip>
            ))}
          </div>
          <h3 className={styles.sectionTitle}>{props.bottomListTitle}</h3>
          <div className={styles.chipContainer}>
            {props.bottomListItems.map((item) => (
              <Chip color="secondary" key={item} label={item}></Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})