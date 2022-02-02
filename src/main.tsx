import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

let loadContainer: Element | DocumentFragment
export function init({ container, props = {} }: any = {}) {
  loadContainer = container
  ReactDOM.render(<App {...props} />, container)
}
export function clean() {
  if (loadContainer) {
    ReactDOM.unmountComponentAtNode(loadContainer)
  }
}

if (process.env.NODE_ENV === 'development') {
  init({ container: document.getElementById('root') })
}
