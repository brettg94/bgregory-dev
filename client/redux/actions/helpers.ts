import { State } from '../redux'

export function guardReducer(actionType: string, reducer: (state: State, action: any) => State) {
  return (state: State, action: { type: string }) => (action.type !== actionType ? state : reducer(state, action))
}
