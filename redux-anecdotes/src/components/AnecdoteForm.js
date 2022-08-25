import { connect } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { alert } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addNew = (event) => {
    event.preventDefault()
    const newAnecdote = event.target.new.value
    event.target.new.value = ''
    props.create(newAnecdote)
    props.alert(`${newAnecdote} has been added to the list`, 5)
  }

  return(
    <div>
      <h2>create new</h2>
        <form onSubmit={addNew}>
          <div><input name="new"/></div>
          <button type="submit">create</button>
        </form>
    </div>
  )
}

const mapDispatchToProps = {
  create, alert
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm