import { ChakraProvider, theme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { SidebarDrawerProvider } from './components/contexts/SidebarDrawerContext'
import { Router } from './Router'

function App() {
  return (
    <SidebarDrawerProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SidebarDrawerProvider>

  )
}

export default App
