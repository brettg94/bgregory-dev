import React from 'react'
import { API } from '@Client/api/api'
import { CoverPageUI } from './cover-page-ui'
import styles from './cover-page.module.scss'
import { CoverPageWithContactDetails } from '@Server/manager/cms/cms-manager'
import { PageIndex } from '@Client/redux/redux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { SetContactEmailAction } from '@Client/redux/actions/set-contact-email/set-contact-email'
import { SetHighestPageMountedAction } from '@Client/redux/actions/set-highest-page-mounted/set-highest-page-mounted'

type Props = {
  setContactEmail: (contactEmail: string) => void
  setPageIndexLoaded: () => void
}

const CoverPageFetcher = (props: Props) => {
  const [coverPage, setCoverPage] = React.useState<CoverPageWithContactDetails | undefined>(undefined)

  React.useEffect(() => {
    API.getCoverPageWithContactDetails().then((response) => {
      setCoverPage(response)
      //The contact page needs the contact email from this result.
      props.setContactEmail(response.contactEmail)
    })
    props.setPageIndexLoaded()
  }, [])

  return coverPage ? <CoverPageUI {...coverPage} /> : <div className={styles.preloadContainer}></div>
}

type DispatchProps = Pick<Props, 'setContactEmail' | 'setPageIndexLoaded'>

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    setContactEmail: (email: string) => {
      dispatch(SetContactEmailAction.create(email))
    },
    setPageIndexLoaded: () => {
      dispatch(SetHighestPageMountedAction.create(PageIndex.COVER_PAGE))
    }
  }
}

export const CoverPage = connect(undefined, mapDispatchToProps)(CoverPageFetcher)
