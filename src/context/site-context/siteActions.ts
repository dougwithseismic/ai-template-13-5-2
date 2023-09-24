// 1. Add a new key:value pair to the `State` type.

export type State = {
  name: string | null | undefined
  darkMode: boolean
}

// 2. Add a new key:value pair to the `defaultState` object. This gets used when the app first loads.
export const defaultState: State = {
  name: 'My Site',
  darkMode: false
}

// 3. Add a new key:value pair to the `SiteActions` type. This is the list of actions that can be dispatched.
export type SiteActions = {
  SET_NAME: { name: string }
  TOGGLE_DARK_MODE: undefined
  SET_STATE: Partial<State>
}

// 4. Add a new key:value pair to the `actionMap` object. This is the list of functions that handle each action.
export const actionMap: {
  [key: string]: (state: State, action: Actions) => State
} = {
  SET_NAME: (state, action) => {
    if ('payload' in action) {
      return { ...state, name: action.payload.name }
    }
    return state
  },
  TOGGLE_DARK_MODE: state => {
    return { ...state, darkMode: !state.darkMode }
  },
  SET_STATE: (state, action) => {
    if ('payload' in action) {
      // Use type assertion to convince TypeScript that the new state matches the `State` type.
      return { ...state, ...action.payload } as State
    }
    return state
  }
}

// ---------------------

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export type Actions = ActionMap<SiteActions>[keyof ActionMap<SiteActions>]
