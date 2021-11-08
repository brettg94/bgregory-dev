import { ExperienceBlock } from '@Server/manager/cms/cms-manager'
import React from 'react'
import styles from './experience-page.module.scss'

type Props = {
  experienceBlocks: ExperienceBlock[]
}

export const ExperiencePageUI = (props: Props) => {
  return (
    <div className={styles.container}>
      <h2>EXPERIENCE</h2>
      {props.experienceBlocks.map((block) => {
        return <div>{block.company}</div>
      })}
    </div>
  )
}
