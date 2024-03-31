import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/kumbh-sans/400.css'
import '@fontsource/kumbh-sans/700.css'

import App from './App.tsx'
import './theme/global/global.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
