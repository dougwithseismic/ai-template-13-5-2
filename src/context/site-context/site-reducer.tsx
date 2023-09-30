import type { State } from '.'
import { SiteActions } from './action-types'
import { actionMap } from './use-actions'

export const siteReducer = (state: State, action: SiteActions): State => {
  const reducer = actionMap[action.type] as any
  if (reducer) {
    return reducer(state, action.payload)
  }
  return state
}
