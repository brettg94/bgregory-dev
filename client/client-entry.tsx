import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/app/app-ui'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createRootReducer } from './redux/redux'
import thunk from 'redux-thunk'
import './styles/global.scss'

console.log(`Redux devtools are intentionally left intact in this production build so you can take a look if you'd like.`)
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(createRootReducer(), enhancer)

//The browser's scroll restoration introduces a lot of complexities with lazy-loaded components
//Certainly not the greatest solution here -- but for a portfolio website, I'm content to just start at the top of the screen.
//In the future, it may be a good idea to utilize the browser's local storage to store the last visited page index, and then manually restore the session from that spot upon page refresh.
window.history.scrollRestoration = 'manual'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('entry')
)
