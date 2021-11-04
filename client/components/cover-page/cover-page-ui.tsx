import { Chip } from '@mui/material'
import React from 'react'
import styles from './cover-page.module.scss'

type Props = {}

export const CoverPage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.tagline}>
        <h1>Brett Gregory</h1>
        <div className={styles.jobTitle}>Full Stack Web Engineer</div>
        <div className={styles.blurb}>5+ years of relevant experience</div>
      </div>
      <div>
        <Chip label={'React.js'}></Chip>
        <Chip label={'React.js'}></Chip>
        <Chip label={'React.js'}></Chip>
        <Chip label={'React.js'}></Chip>
        <Chip label={'React.js'}></Chip>
        <Chip label={'React.js'}></Chip>
      </div>
    </div>
  )
}
