import React from 'react';
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const actions = {
    good: { type: 'GOOD' },
    ok: { type: 'OK' },
    bad: { type: 'BAD' },
    reset: { type: 'ZERO' }
  }

  return (
    <div>
      <button onClick={() => store.dispatch(actions.good)}>good</button>
      <button onClick={() => store.dispatch(actions.ok)}>ok</button>
      <button onClick={() => store.dispatch(actions.bad)}>bad</button>
      <button onClick={() => store.dispatch(actions.reset)}>reset</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
