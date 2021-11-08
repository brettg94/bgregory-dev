import React from 'react'
import { ExperienceBlock } from '@Server/manager/cms/cms-manager'
import { ExperienceBlockUI } from '../experience-block/experience-block-ui'
import styles from './experience-page.module.scss'
import { Grid } from '@mui/material'

type Props = {
  experienceBlocks: ExperienceBlock[]
}

export const ExperiencePageUI = (props: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>EXPERIENCE</h2>
      <div className={styles.experienceBlocks}>
        <Grid container direction="row" justifyContent="center" alignItems="stretch">
          {props.experienceBlocks
            .sort((a, b) => a.displayPriority - b.displayPriority)
            .map((block) => {
              return (
                <Grid item>
                  <ExperienceBlockUI {...block} />
                </Grid>
              )
            })}
        </Grid>
      </div>
    </div>
  )
}
