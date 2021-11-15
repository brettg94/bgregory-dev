import React from 'react'
import { API } from '@Client/api/api'
import { SkillsPageUI } from './skills-page-ui'
import { SkillSection } from '@Server/manager/cms/cms-manager'
import styles from './skills-page.module.scss'
import { PageIndex } from '@Client/redux/redux'
import { SetHighestPageMountedAction } from '@Client/redux/actions/set-highest-page-mounted/set-highest-page-mounted'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

type Props = {
  setPageIndexLoaded: () => void
}

export const SkillsPageFetcher = (props: Props) => {
  const [skillSections, setSkillSections] = React.useState<SkillSection[] | undefined>(undefined)

  //Fine for now, there's no reason this should ever re-render and hit the API again.
  React.useEffect(() => {
    API.getSkillSectionsWithSkills().then((response) => {
      setSkillSections(response)
    })
    props.setPageIndexLoaded()
  }, [])

  return skillSections ? <SkillsPageUI skillSections={skillSections} /> : <div className={styles.preloadContainer}></div>
}

type DispatchProps = Pick<Props, 'setPageIndexLoaded'>

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    setPageIndexLoaded: () => {
      dispatch(SetHighestPageMountedAction.create(PageIndex.SKILLS_PAGE))
    }
  }
}

export const SkillsPage = connect(undefined, mapDispatchToProps)(SkillsPageFetcher)
