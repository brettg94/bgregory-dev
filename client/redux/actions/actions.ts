import { State } from '../redux'
import { Reducer } from 'redux'
import { ActivateTooltipModalAction } from './activate-tooltip-modal'
import { SaveTooltipDataAction } from './save-tooltip-data'
import { CloseTooltipModalAction } from './close-tooltip-modal'

export const Reducers: Reducer<State>[] = [ActivateTooltipModalAction.reduce, SaveTooltipDataAction.reduce, CloseTooltipModalAction.reduce]

/*
I generally like a 1:1 relationship between reducers and actions. (Meaning every action has its own discrete reducer)
This is a personal preference and isn't super widely used since it can lead to a reduction in flexibility.

https://stackoverflow.com/questions/37111300/redux-why-not-put-actions-and-reducer-in-same-file

From the creator of redux:
"...Putting [reducers and actions] together negates many benefits of how Flux and Redux application scale.
This leads to code bloat and unnecessary coupling. You lose the flexibility of reacting to the same action from different places..."

For large projects, I can say from experience this is true.
However, for small projects (like this one), the benefits of co-locating all action-related code outweighs the loss of unneeded flexibility.
*/
