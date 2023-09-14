import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'

import GlobalStyles from './components/GlobalStyles.js'
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    red: '#9f0013',
    primary: 'rgba(255,255,255,.8)',
    grey: 'rgba(255,255,255,.5)',
    lightGrey: 'rgba(255,255,255,.9)',
    darkGrey: 'rgba(255,255,255,.2)',
    white: '#FFFFFF',
    backgroundIn: '#111111',
    backgroundOut: '#1E1E1E',
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
)
