import { useEffect } from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import { useDispatch, useSelector } from 'react-redux'

import { initialize } from './reducers/filterReducer'

const App = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialize())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      {notification.message ? <Notification /> : null}
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App