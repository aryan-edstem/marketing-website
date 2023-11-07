import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux' 
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
