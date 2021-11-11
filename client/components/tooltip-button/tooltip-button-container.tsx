import { State } from '@Client/redux/redux'
import { fetchTooltipThunk } from '@Client/redux/thunk/fetch-tooltip'
import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { TooltipButtonUI, Props } from './tooltip-button-ui'

type StateProps = {}
type DispatchProps = Pick<Props, 'dispatchTooltipFetch'>
type OwnProps = Pick<Props, 'identifier'>

function mapStateToProps(): StateProps {
  return {}
}

function mapDispatchToProps(dispatch: ThunkDispatch<State, void, Action>, ownProps: OwnProps): DispatchProps {
  return {
    dispatchTooltipFetch: () => {
      dispatch(fetchTooltipThunk(ownProps.identifier))
    }
  }
}

export const TooltipButton = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(TooltipButtonUI)
