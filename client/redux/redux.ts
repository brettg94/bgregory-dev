import { Reducers } from './actions/actions'
import { Action } from 'redux'
import { Tooltip } from '@Server/manager/cms/cms-manager'

export type State = {
  tooltips: { [key: string]: Tooltip }
  activeTooltipIdentifier?: string
  contactEmail: string
}

export const defaultState: State = {
  tooltips: {},
  contactEmail: ''
}

export const createRootReducer = () => {
  return (state: State = defaultState, action: Action) => {
    let newState = state

    for (let i = 0; i < Reducers.length; i++) {
      newState = Reducers[i](newState, action)
    }

    return { ...newState }
  }
}
