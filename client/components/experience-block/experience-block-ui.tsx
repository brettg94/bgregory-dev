import React from 'react'
import { Paper } from '@mui/material'
import { ExperienceBlock } from '@Server/manager/cms/cms-manager'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import LazyLoad from 'react-lazyload'
import styles from './experience-block.module.scss'

type Props = ExperienceBlock

export const ExperienceBlockUI = (props: Props) => {
  return (
    <div className={styles.container}>
      <Paper elevation={2}>
        <LazyLoad height={'140px'} offset={10}>
          <img className={styles.coverImage} src={props.coverImage.url} title={props.coverImage.title} alt={props.coverImage.description}></img>
        </LazyLoad>
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
}
