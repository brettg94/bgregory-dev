import React from 'react'
import { API } from '@Client/api/api'
import { ExperienceBlock } from '@Server/manager/cms/cms-manager'
import { ExperiencePageUI } from './experience-page-ui'
import styles from './experience-page.module.scss'
import { PageIndex } from '@Client/redux/redux'
import { SetHighestPageMountedAction } from '@Client/redux/actions/set-highest-page-mounted/set-highest-page-mounted'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

type Props = {
  setPageIndexLoaded: () => void
}

const ExperiencePageFetcher = (props: Props) => {
  const [experienceBlocks, setExperienceBlocks] = React.useState<ExperienceBlock[] | undefined>(undefined)

  //Fine for now, there's no reason this should ever re-render and hit the API again. If that changes, implement redux.
  React.useEffect(() => {
    API.getExperienceBlocks().then((response) => {
      setExperienceBlocks(response)
    })
    props.setPageIndexLoaded()
  }, [])

  return experienceBlocks ? <ExperiencePageUI experienceBlocks={experienceBlocks} /> : <div className={styles.preloadContainer}></div>
}

type DispatchProps = Pick<Props, 'setPageIndexLoaded'>

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    setPageIndexLoaded: () => {
      dispatch(SetHighestPageMountedAction.create(PageIndex.EXPERIENCE_PAGE))
    }
  }
}

export const ExperiencePage = connect(undefined, mapDispatchToProps)(ExperiencePageFetcher)
