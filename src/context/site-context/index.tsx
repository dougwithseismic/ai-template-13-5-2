import React, { ReactNode, createContext, useContext, useReducer } from 'react'
import { siteReducer } from './site-reducer'
import { useActions } from './use-actions'

/**
 * @typedef State
 *
 * Defines the shape of the state object.
 *
 * @property {string | null} currentTopic - The current topic in focus.
 * @property {ReturnType<typeof useTextToSpeech>} textToSpeech - The return value of the useTextToSpeech hook.
 * @property {Object} chat - The chat object.
 * @property {string | null} chat.id - The ID of the chat.
 * @property {Chat[]} chat.history - The history of the chat.
 * @property {boolean} darkMode - Whether dark mode is enabled.
 */
export type State = {
  name: string
  darkMode: boolean
}

export const defaultState: State = {
  name: 'default',
  darkMode: true
}

// Create the context
export const SiteContext = createContext<
  [State, ReturnType<typeof useActions>]
>([defaultState, {} as any])

// Create the provider
type SiteContextProviderProps = {
  children: ReactNode
}

export const SiteContextProvider: React.FC<SiteContextProviderProps> = ({
  children
}) => {
  const [state, dispatch] = useReducer(siteReducer, defaultState)
  const actions = useActions(dispatch)

  //   const supabase = supabaseClientAuth()
  //   const { listeners } = useSupabaseListeners(supabase, dispatch) //  gets / listens for assets etc.

  return (
    <SiteContext.Provider value={[{ ...state }, actions]}>
      {children}
    </SiteContext.Provider>
  )
}
export type UseSite = [State, ReturnType<typeof useActions>]

/**
 * useSite custom hook.
 *
 * This hook is used to access the SiteContext.
 *
 * @returns {UseSite} - The state and actions.
 * @throws Will throw an error if used outside of SiteContextProvider.
 */
export const useSite = (): UseSite => {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSite must be used within a SiteContextProvider')
  }
  return context
}
