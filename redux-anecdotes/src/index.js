import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer, 
    filtered: filterReducer,
    notification: notificationReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
