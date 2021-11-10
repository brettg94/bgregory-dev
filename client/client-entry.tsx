import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/app/app-ui'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { createRootReducer } from './redux/redux'
import './styles/global.scss'

const store = createStore(createRootReducer())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('entry')
)
