import React, {
  createContext,
  useReducer,
  useMemo,
  ReactNode,
  useContext
} from 'react'
import { siteReducer } from './siteReducer'
import { Actions } from './siteActions'
import { State, defaultState } from './siteActions'

export type SiteDispatch = React.Dispatch<Actions>
export type SiteContextType = [State, SiteDispatch]

const initialState: SiteContextType = [defaultState, () => {}]

export const SiteContext = createContext<SiteContextType>(initialState)

type SiteContextProviderProps = {
  children: ReactNode
}

export const SiteContextProvider: React.FC<SiteContextProviderProps> = ({
  children
}) => {
  const [state, dispatch] = useReducer(siteReducer, defaultState)

  return (
    <SiteContext.Provider value={[state, dispatch]}>
      {children}
    </SiteContext.Provider>
  )
}

export const useSite = (): SiteContextType => {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSite must be used within a SiteContextProvider')
  }
  return context
}
