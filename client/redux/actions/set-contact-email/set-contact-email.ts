import { State } from '../../redux'
import { reduceOnlyForSpecificAction } from '../helpers'

const SET_CONTACT_EMAIL = 'SET_CONTACT_EMAIL'

type SetContactEmail = {
  type: typeof SET_CONTACT_EMAIL
  contactEmail: string
}

const create = (contactEmail: string): SetContactEmail => ({
  type: SET_CONTACT_EMAIL,
  contactEmail
})

const reduce = reduceOnlyForSpecificAction(SET_CONTACT_EMAIL, (state: State, action: SetContactEmail): State => {
  return {
    ...state,
    contactEmail: action.contactEmail
  }
})

export const SetContactEmailAction = {
  create,
  reduce
}
