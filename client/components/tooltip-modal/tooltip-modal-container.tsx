import { CloseTooltipModalAction } from '@Client/redux/actions/close-tooltip-modal/close-tooltip-modal'
import { State } from '@Client/redux/redux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { TooltipModalUI, Props } from './tooltip-modal-ui'

type StateProps = Pick<Props, 'tooltip'>
type DispatchProps = Pick<Props, 'onTooltipClose'>
type OwnProps = {}

function mapStateToProps(state: State): StateProps {
  return {
    tooltip: state.activeTooltipIdentifier ? state.tooltips[state.activeTooltipIdentifier] : undefined
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    onTooltipClose: () => {
      dispatch(CloseTooltipModalAction.create())
    }
  }
}

export const TooltipModal = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(TooltipModalUI)
