import React from 'react'

import ReactDOM from 'react-dom/client'

import { App } from './App.js'

import './styles.css'

const rootEl = document.getElementById('root')

if (!rootEl) {
  throw new Error('No root element found')
}

const root = ReactDOM.createRoot(rootEl)
root.render(<App />)
