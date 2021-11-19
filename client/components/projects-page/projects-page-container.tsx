import React from 'react'
import { API } from '@Client/api/api'
import { ProjectsPageUI } from './projects-page-ui'
import { Project } from '@Server/manager/cms/cms-manager'
import styles from './projects-page.module.scss'

export const ProjectsPage = () => {
  const [projects, setProjects] = React.useState<Project[] | undefined>(undefined)

  //Fine for now, there's no reason this should ever re-render and hit the API again.
  React.useEffect(() => {
    API.getProjects().then((response) => {
      setProjects(response)
      console.log("If you see errors from app.[hash].js, it's Gfycat, not me!")
    })
  }, [])

  return projects ? <ProjectsPageUI projects={projects} /> : <div className={styles.preloadContainer}></div>
}
