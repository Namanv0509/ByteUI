'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/lib/store'

export function ThemeProvider({
  children,
  ...props
}: {
  children: ReactNode
  [key: string]: any
}) {
  return (
    <Provider store={store}>
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
    </Provider>
  )
}
