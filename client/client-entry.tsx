import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/app/app-container'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createRootReducer } from './redux/redux'
import thunk from 'redux-thunk'
import './styles/global.scss'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(createRootReducer(), enhancer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('entry')
)
