import React from 'react'
import { API } from '@Client/api/api'
import { ExperienceBlock } from '@Server/manager/cms/cms-manager'
import { ExperiencePageUI } from './experience-page-ui'
import styles from './experience-page.module.scss'

export const ExperiencePage = () => {
  const [experienceBlocks, setExperienceBlocks] = React.useState<ExperienceBlock[] | undefined>(undefined)

  //Fine for now, there's no reason this should ever re-render and hit the API again. If that changes, implement redux.
  React.useEffect(() => {
    API.getExperienceBlocks().then((value) => {
      setExperienceBlocks(value)
    })
  }, [])

  return experienceBlocks ? <ExperiencePageUI experienceBlocks={experienceBlocks} /> : <div className={styles.preloadContainer}></div>
}
