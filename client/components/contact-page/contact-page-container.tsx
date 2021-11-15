import { State } from '@Client/redux/redux'
import { connect } from 'react-redux'
import { ContactPageUI, Props } from './contact-page-ui'

type StateProps = Pick<Props, 'contactEmail'>
type DispatchProps = {}
type OwnProps = {}

function mapStateToProps(state: State): StateProps {
  return {
    contactEmail: state.contactEmail
  }
}

function mapDispatchToProps(): DispatchProps {
  return {}
}

export const ContactPage = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(ContactPageUI)
