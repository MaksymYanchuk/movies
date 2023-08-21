import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import GlobalStyles from './components/GlobalStyles.jsx'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    red: '#9f0013',
    primary: 'rgb(255,255,255,.8)',
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
