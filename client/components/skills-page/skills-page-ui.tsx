import { Stack } from '@mui/material'
import { SkillSection } from '@Server/manager/cms/cms-manager'
import React from 'react'
import { SkillSectionBlock } from '../skill-section-block/skill-section-block-ui'
import styles from './skills-page.module.scss'

export type Props = {
  skillSections: SkillSection[]
}

export const SkillsPageUI = (props: Props) => {
  const sortedSkillSections = props.skillSections
    .sort((a, b) => a.displayPriority - b.displayPriority)
    .map((skillSection) => {
      return <SkillSectionBlock key={skillSection.title} {...skillSection} />
    })

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>SKILLS</h2>
      <div>
        <Stack direction={'column'} spacing={4} justifyContent="center" alignItems="center">
          {sortedSkillSections}
        </Stack>
      </div>
    </div>
  )
}
