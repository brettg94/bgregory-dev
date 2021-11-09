import React from 'react'
import { ExperienceBlock } from '@Server/manager/cms/cms-manager'
import { ExperienceBlockUI } from '../experience-block/experience-block-ui'
import { Stack } from '@mui/material'
import styles from './experience-page.module.scss'

type Props = {
  experienceBlocks: ExperienceBlock[]
}

export const ExperiencePageUI = (props: Props) => {
  const experienceBlocks = props.experienceBlocks
    .sort((a, b) => a.displayPriority - b.displayPriority)
    .map((block) => {
      return <ExperienceBlockUI {...block} />
    })

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>EXPERIENCE</h2>
      <div className={styles.experienceBlocks}>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row' }} spacing={4} justifyContent="center" alignItems="stretch">
          {experienceBlocks}
        </Stack>
      </div>
    </div>
  )
}
