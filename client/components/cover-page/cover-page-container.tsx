import React from 'react'
import { API } from '@Client/api/api'
import { CoverPageUI } from './cover-page-ui'
import styles from './cover-page.module.scss'
import { CoverPageWithContactDetails } from '@Server/manager/cms/cms-manager'
import { State } from '@Client/redux/redux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { SetContactEmailAction } from '@Client/redux/actions/set-contact-email/set-contact-email'

type Props = {
  setContactEmail: (contactEmail: string) => void
}

const CoverPageFetcher = (props: Props) => {
  const [coverPage, setCoverPage] = React.useState<CoverPageWithContactDetails | undefined>(undefined)

  React.useEffect(() => {
    API.getCoverPageWithContactDetails().then((value) => {
      setCoverPage(value)
      //The contact page needs the contact email from this result.
      props.setContactEmail(value.contactEmail)
    })
  }, [])

  return coverPage ? <CoverPageUI {...coverPage} /> : <div className={styles.preloadContainer}></div>
}

type StateProps = {}
type DispatchProps = Pick<Props, 'setContactEmail'>
type OwnProps = {}

function mapStateToProps(state: State): StateProps {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    setContactEmail: (email: string) => {
      dispatch(SetContactEmailAction.create(email))
    }
  }
}

export const CoverPage = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(CoverPageFetcher)
