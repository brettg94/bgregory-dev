import { API } from '@Client/api/api'
import { Dispatch } from 'redux'
import { ActivateTooltipModalAction } from '../actions/activate-tooltip-modal'
import { SaveTooltipDataAction } from '../actions/save-tooltip-data'

export function fetchTooltipThunk(tooltipIdentifier: string) {
  return async (dispatch: Dispatch) => {
    try {
      const tooltip = await API.getTooltip(tooltipIdentifier)
      dispatch(SaveTooltipDataAction.create(tooltip))
      dispatch(ActivateTooltipModalAction.create(tooltip.identifier))
    } catch (e) {
      console.error('Error fetching tooltip', e)
    }
  }
}
