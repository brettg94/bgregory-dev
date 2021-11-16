import { PageIndex, State } from '../../redux'
import { reduceOnlyForSpecificAction } from '../helpers'

const SET_HIGHEST_PAGE_MOUNTED = 'SET_HIGHEST_PAGE_MOUNTED'

type SetHighestPageMounted = {
  type: typeof SET_HIGHEST_PAGE_MOUNTED
  pageIndex: PageIndex
}

const create = (pageIndex: PageIndex): SetHighestPageMounted => ({
  type: SET_HIGHEST_PAGE_MOUNTED,
  pageIndex
})

const reduce = reduceOnlyForSpecificAction(SET_HIGHEST_PAGE_MOUNTED, (state: State, action: SetHighestPageMounted): State => {
  return {
    ...state,
    highestPageMounted: Math.max(action.pageIndex, state.highestPageMounted)
  }
})

export const SetHighestPageMountedAction = {
  create,
  reduce
}
