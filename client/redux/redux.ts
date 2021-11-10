import { Reducers } from './actions/actions'
import { Action } from 'redux'
import { clone } from 'ramda'

export type State = {}

export const defaultState: State = {}

export const createRootReducer =
  () =>
  (state: State = defaultState, action: Action) => {
    let newState = clone(state)

    for (let i = 0; i < Reducers.length; i++) {
      newState = Reducers[i](newState, action)
    }

    return newState
  }
