import { State } from '@Client/redux/redux'
import { connect } from 'react-redux'
import { AppUI, Props } from './app-ui'

type StateProps = Pick<Props, 'highestPageLoaded'>

function mapStateToProps(state: State): StateProps {
  return {
    highestPageLoaded: state.highestPageMounted
  }
}

export const App = connect(mapStateToProps)(AppUI)
