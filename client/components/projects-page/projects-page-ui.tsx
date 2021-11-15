import React from 'react'
import { Project } from '@Server/manager/cms/cms-manager'
import styles from './projects-page.module.scss'
import { ProjectBlock } from '../project-block/project-block-ui'
import Masonry from 'react-masonry-css'
import { TooltipButton } from '../tooltip-button/tooltip-button-container'
import { TooltipIdentifier } from '@Server/enum/enum'

type Props = {
  projects: Project[]
}

const masonryBreakpoints = {
  default: 3,
  1200: 2,
  860: 1
}

export const ProjectsPageUI = React.memo((props: Props) => {
  const sortedProjects = props.projects
    .sort((a, b) => a.displayPriority - b.displayPriority)
    .map((project) => {
      return <ProjectBlock key={project.title} {...project} />
    })

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        PROJECTS <TooltipButton identifier={TooltipIdentifier.PROJECTS_PAGE} margin={{ left: true }} />
      </h2>
      <div className={styles.interior}>
        <Masonry breakpointCols={masonryBreakpoints} className={styles.masonryGrid} columnClassName={styles.gridColumn}>
          {sortedProjects}
        </Masonry>
      </div>
    </div>
  )
})
