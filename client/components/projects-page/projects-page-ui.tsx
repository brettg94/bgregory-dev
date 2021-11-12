import React from 'react'
import { Project } from '@Server/manager/cms/cms-manager'
import { Stack } from '@mui/material'
import styles from './projects-page.module.scss'
import { ProjectBlock } from '../project-block/project-block-ui'

type Props = {
  projects: Project[]
}

export const ProjectsPageUI = React.memo((props: Props) => {
  const sortedProjects = props.projects
    .sort((a, b) => a.displayPriority - b.displayPriority)
    .map((project) => {
      return <ProjectBlock {...project} />
    })

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>PROJECTS</h2>
      <div>
        <Stack direction={'column'} spacing={4} justifyContent="center" alignItems="center">
          {sortedProjects}
        </Stack>
      </div>
    </div>
  )
})
