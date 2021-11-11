import { State } from '../redux'
import { reduceOnlyForSpecificAction } from './helpers'

const CLOSE_TOOLTIP_MODAL = 'CLOSE_TOOLTIP_MODAL'

type CloseTooltipModal = {
  type: typeof CLOSE_TOOLTIP_MODAL
}

const create = (): CloseTooltipModal => ({
  type: CLOSE_TOOLTIP_MODAL
})

const reduce = reduceOnlyForSpecificAction(CLOSE_TOOLTIP_MODAL, (state: State, action: CloseTooltipModal): State => {
  return {
    ...state,
    activeTooltipIdentifier: undefined
  }
})

export const CloseTooltipModalAction = {
  create,
  reduce
}
