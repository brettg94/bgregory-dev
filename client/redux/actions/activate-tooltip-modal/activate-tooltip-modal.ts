import { State } from '../../redux'
import { reduceOnlyForSpecificAction } from '../helpers'

const ACTIVATE_TOOLTIP_MODAL = 'ACTIVATE_TOOLTIP_MODAL'

type ActivateTooltipModal = {
  type: typeof ACTIVATE_TOOLTIP_MODAL
  tooltipIdentifer: string
}

const create = (tooltipIdentifer: string): ActivateTooltipModal => ({
  type: ACTIVATE_TOOLTIP_MODAL,
  tooltipIdentifer
})

const reduce = reduceOnlyForSpecificAction(ACTIVATE_TOOLTIP_MODAL, (state: State, action: ActivateTooltipModal): State => {
  return {
    ...state,
    activeTooltipIdentifier: action.tooltipIdentifer
  }
})

export const ActivateTooltipModalAction = {
  create,
  reduce
}
