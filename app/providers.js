// app/providers.tsx
'use client'
import '@fontsource/courier-prime/400.css'
import '@fontsource/plus-jakarta-sans/200.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}