import React, { useCallback, useMemo } from 'react'
import { State } from '.'
import { SiteActions } from './action-types'

/**
 * ActionHandlers type defines the signature for all action handlers.
 * Each action handler takes the current state and a payload as arguments,
 * and returns the new state.
 */
export type ActionHandlers = {
  TOGGLE_DARK_MODE: (state: State, payload: undefined) => State
  SET_STATE: (state: State, payload: Partial<State>) => State
}

/**
 * actionMap maps action types to their respective handlers.
 */
export const actionMap: ActionHandlers = {
  TOGGLE_DARK_MODE: state => ({ ...state, darkMode: !state.darkMode }),
  SET_STATE: (state, newState) => ({ ...state, ...newState })
}

/**
 * useActions is a custom hook that returns all action functions.
 * These action functions can be used to dispatch actions to modify the state.
 *
 * @param {React.Dispatch<SiteActions>} dispatch - The dispatch function from useReducer.
 * @returns {Object} - An object containing all action functions.
 */
export const useActions = (dispatch: React.Dispatch<SiteActions>) => {
  /**
   * Toggles dark mode on or off. (PS. This is just an example. We're not actually storing dark mode in this state. But we could.)
   */
  const toggleDarkMode = useCallback(() => {
    dispatch({
      type: 'TOGGLE_DARK_MODE',
      payload: undefined
    })
  }, [dispatch])

  /**
   * Sets and overrides the state.
   *
   * @param {Partial<State>} state - The new state or partial state to set.
   */
  const setState = useCallback(
    (state: Partial<State>) => {
      dispatch({
        type: 'SET_STATE',
        payload: state
      })
    },
    [dispatch]
  )

  // Memoize action functions to prevent unnecessary re-renders.
  const actions = useMemo(
    () => ({ toggleDarkMode, setState, dispatch }),
    [toggleDarkMode, setState, dispatch]
  )

  return actions
}
