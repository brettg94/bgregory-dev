import React from 'react'
import { Paper } from '@mui/material'
import { ExperienceBlock } from '@Server/manager/cms/cms-manager'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './experience-block.module.scss'

type Props = ExperienceBlock

export const ExperienceBlockUI = React.memo((props: Props) => {
  return (
    <div className={styles.container}>
      <Paper elevation={2} className={styles.paper}>
        <img className={styles.coverImage} src={props.coverImage.url} title={props.coverImage.title} alt={props.coverImage.description}></img>
        <div className={styles.interior}>
          <div className={styles.companyName}>{props.company}</div>
          <div className={styles.locationAndDuration}>
            {props.location} &#8226; {props.startMonthAndYear} - {props.endMonthAndYear ?? 'Present'}
          </div>
          <div className={styles.jobTitle}>{props.jobTitle}</div>
          <div>{documentToReactComponents(props.details)}</div>
        </div>
      </Paper>
    </div>
  )
})
