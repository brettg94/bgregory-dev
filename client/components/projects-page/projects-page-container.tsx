import React from 'react'
import { API } from '@Client/api/api'
import { ProjectsPageUI } from './projects-page-ui'
import { Project } from '@Server/manager/cms/cms-manager'
import styles from './projects-page.module.scss'
import { PageIndex } from '@Client/redux/redux'
import { SetHighestPageMountedAction } from '@Client/redux/actions/set-highest-page-mounted/set-highest-page-mounted'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

type Props = {
  setPageIndexLoaded: () => void
}

const ProjectsPageFetcher = (props: Props) => {
  const [projects, setProjects] = React.useState<Project[] | undefined>(undefined)

  //Fine for now, there's no reason this should ever re-render and hit the API again.
  React.useEffect(() => {
    API.getProjects().then((response) => {
      setProjects(response)
    })
    props.setPageIndexLoaded()
  }, [])

  return projects ? <ProjectsPageUI projects={projects} /> : <div className={styles.preloadContainer}></div>
}

type DispatchProps = Pick<Props, 'setPageIndexLoaded'>

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    setPageIndexLoaded: () => {
      dispatch(SetHighestPageMountedAction.create(PageIndex.PROJECTS_PAGE))
    }
  }
}

export const ProjectsPage = connect(undefined, mapDispatchToProps)(ProjectsPageFetcher)
