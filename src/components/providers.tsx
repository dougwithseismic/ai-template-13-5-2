'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SiteContextProvider } from '@/context/site-context'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SiteContextProvider>{children}</SiteContextProvider>
    </NextThemesProvider>
  )
}
