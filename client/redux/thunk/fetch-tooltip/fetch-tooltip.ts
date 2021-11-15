import { API } from '@Client/api/api'
import { Dispatch } from 'redux'
import { ActivateTooltipModalAction } from '../../actions/activate-tooltip-modal/activate-tooltip-modal'
import { SaveTooltipDataAction } from '../../actions/save-tooltip-data/save-tooltip-data'
import { State } from '../../redux'

export function fetchTooltipThunk(tooltipIdentifier: string) {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      //Make an API call if the tooltip data doesn't currently exist in Redux
      if (!getState().tooltips[tooltipIdentifier]) {
        const tooltip = await API.getTooltip(tooltipIdentifier)
        dispatch(SaveTooltipDataAction.create(tooltip))
      }

      dispatch(ActivateTooltipModalAction.create(tooltipIdentifier))
    } catch (e) {
      console.error('Error fetching tooltip', e)
    }
  }
}
