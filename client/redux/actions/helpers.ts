import { Action } from 'redux'
import { State } from '../redux'

//If the reducer detects an action that is not of "actionType", just return the state. Enforces 1:1 action:reducer relationship.
export function reduceOnlyForSpecificAction(actionType: string, reducer: (state: State, action: Action) => State) {
  return (state: State, action: { type: string }) => (action.type !== actionType ? state : reducer(state, action))
}
