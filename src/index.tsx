import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import AppHeader from './components/appHeader'
import AppMenu from './components/appMenu'
import AppFooter from './components/appFooter'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppHeader />
      <AppMenu />
      <div className="content-wrapper">
        <App />
      </div>

      <AppFooter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
