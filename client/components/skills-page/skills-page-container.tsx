import React from 'react'
import { API } from '@Client/api/api'
import { SkillsPageUI } from './skills-page-ui'
import { SkillSection } from '@Server/manager/cms/cms-manager'
import styles from './skills-page.module.scss'

export const SkillsPage = () => {
  const [skillSections, setSkillSections] = React.useState<SkillSection[] | undefined>(undefined)

  //Fine for now, there's no reason this should ever re-render and hit the API again.
  React.useEffect(() => {
    API.getSkillSectionsWithSkills().then((response) => {
      setSkillSections(response)
    })
  }, [])

  return skillSections ? <SkillsPageUI skillSections={skillSections} /> : <div className={styles.preloadContainer}></div>
}
