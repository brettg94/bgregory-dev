import { State } from '@Client/redux/redux'
import { fetchTooltipThunk } from '@Client/redux/thunk/fetch-tooltip'
import { Skill } from '@Server/manager/cms/cms-manager'
import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { SkillChipUI, Props } from './skill-chip-ui'

type StateProps = {}
type DispatchProps = Pick<Props, 'dispatchTooltipFetch'>
type OwnProps = Skill

function mapStateToProps(): StateProps {
  return {}
}

function mapDispatchToProps(dispatch: ThunkDispatch<State, void, Action>, ownProps: OwnProps): DispatchProps {
  return {
    dispatchTooltipFetch: () => {
      if (ownProps.tooltipIdentifier) {
        dispatch(fetchTooltipThunk(ownProps.tooltipIdentifier))
      }
    }
  }
}

export const SkillChip = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(SkillChipUI)
