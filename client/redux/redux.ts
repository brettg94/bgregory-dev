import { Reducers } from './actions/actions'
import { Action } from 'redux'
import { clone } from 'ramda'
import { Tooltip } from '@Server/manager/cms/cms-manager'

export type State = {
  tooltips: { [key: string]: Tooltip }
  activeTooltipIdentifier?: string
}

export const defaultState: State = {
  tooltips: {}
}

export const createRootReducer = () => {
  return (state: State = defaultState, action: Action) => {
    let newState = clone(state)

    for (let i = 0; i < Reducers.length; i++) {
      newState = Reducers[i](newState, action)
    }

    return newState
  }
}
