import { Reducers } from './actions/actions'
import { Action } from 'redux'
import { clone } from 'ramda'
import { Tooltip } from '@Server/manager/cms/cms-manager'

export type State = {
  tooltips: { [key: string]: Tooltip }
  activeTooltipIdentifier?: string
  contactEmail: string
  highestPageMounted: PageIndex
}

export const enum PageIndex {
  COVER_PAGE = 1,
  EXPERIENCE_PAGE = 2,
  PROJECTS_PAGE = 3,
  SKILLS_PAGE = 4,
  CONTACT_PAGE = 5
}

export const defaultState: State = {
  tooltips: {},
  contactEmail: '',
  highestPageMounted: PageIndex.COVER_PAGE
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
