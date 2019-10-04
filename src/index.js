import React                  from 'react'
import ReactDOM               from 'react-dom'
import {Provider}             from 'react-redux'

import './index.css'
import './semantic-dist/semantic.min.css'

import App                    from './App'
import configureStore         from './store/configureStore'
import registerServiceWorker  from './registerServiceWorker'

export const store = configureStore()

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

registerServiceWorker()
