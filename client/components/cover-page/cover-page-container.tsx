import React from 'react'
import { API } from '@Client/api/api'
import { CoverPage as CoverPageType } from '@Server/manager/cms/cms-manager'
import { CoverPageUI } from './cover-page-ui'

export const CoverPage = () => {
  const [coverPage, setCoverPage] = React.useState<CoverPageType | undefined>(undefined)

  //Fine for now, there's no reason this should ever re-render and hit the API again. If that changes, implement redux.
  React.useEffect(() => {
    API.getCoverPage().then((value) => {
      setCoverPage(value)
    })
  }, [])

  return coverPage ? <CoverPageUI {...coverPage} /> : <div>Loading...</div>
}
