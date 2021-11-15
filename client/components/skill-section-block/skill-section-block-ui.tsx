import { Paper, Stack } from '@mui/material'
import { SkillSection } from '@Server/manager/cms/cms-manager'
import React from 'react'
import { SkillChip } from '../skill-chip/skill-chip-container'
import styles from './skill-section-block.module.scss'

type Props = SkillSection

export const SkillSectionBlock = (props: Props) => {
  return (
    <div className={styles.container}>
      <Paper elevation={2} className={styles.paper}>
        <div className={styles.interior}>
          <h3 className={styles.header}>{props.title}</h3>
          <Stack
            direction="row"
            flexWrap={'wrap'}
            sx={{
              listStyle: 'none'
            }}
            // divider={<Divider orientation="vertical" flexItem />}
          >
            {props.skills.map((skill) => (
              <SkillChip key={skill.title} {...skill} />
            ))}
          </Stack>
        </div>
      </Paper>
    </div>
  )
}
