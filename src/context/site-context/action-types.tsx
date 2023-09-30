import React from 'react'
import { ActionHandlers } from './use-actions'

// Generate SiteActions type from ActionHandlers
export type SiteActions = {
  [K in keyof ActionHandlers]: {
    type: K
    payload: Parameters<ActionHandlers[K]>[1]
  }
}[keyof ActionHandlers]
