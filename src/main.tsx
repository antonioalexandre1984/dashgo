import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from './styles/theme'
import { SidebarDrawerProvider } from './components/contexts/SidebarDrawerContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS={false} theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
