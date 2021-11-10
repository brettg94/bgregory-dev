import { Tooltip } from '@Server/manager/cms/cms-manager'
import { State } from '../redux'
import { guardReducer } from './helpers'

const SAVE_TOOLTIP_DATA = 'SAVE_TOOLTIP_DATA'

type SaveTooltipData = {
  type: typeof SAVE_TOOLTIP_DATA
  tooltip: Tooltip
}

const create = (tooltip: Tooltip): SaveTooltipData => ({
  type: SAVE_TOOLTIP_DATA,
  tooltip
})

const reduce = guardReducer(SAVE_TOOLTIP_DATA, (state: State, action: SaveTooltipData): State => {
  return {
    ...state,
    tooltips: {
      [action.tooltip.identifier]: action.tooltip
    }
  }
})

export const SaveTooltipDataAction = {
  create,
  reduce
}
