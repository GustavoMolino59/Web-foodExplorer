import React from 'react'
import ReactDOM from 'react-dom/client'


import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './hooks/auth'
import {Routes} from './routes'
import { OrderProvider } from './hooks/orderCount'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
      <OrderProvider>
      <Routes/>
      </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
