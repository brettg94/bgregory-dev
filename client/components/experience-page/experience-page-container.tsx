import { API } from '@Client/api/api'
import { ExperienceBlock } from '@Server/manager/cms/cms-manager'
import React from 'react'
import { ExperiencePageUI } from './experience-page-ui'

export const ExperiencePage = () => {
  const [experienceBlocks, setExperienceBlocks] = React.useState<ExperienceBlock[] | undefined>(undefined)

  //Fine for now, there's no reason this should ever re-render and hit the API again. If that changes, implement redux.
  React.useEffect(() => {
    API.getExperienceBlocks().then((value) => {
      setExperienceBlocks(value)
    })
  }, [])

  return experienceBlocks ? <ExperiencePageUI experienceBlocks={experienceBlocks} /> : <div>Loading...</div>
}
