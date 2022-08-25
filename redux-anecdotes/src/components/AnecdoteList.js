import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { alert } from '../reducers/notificationReducer'

const AnecdoteList = (props) => { 
  
  const vote = (id) => {
    const anecdote = props.anecdotes.find(element => id === element.id)
    props.voteFor(anecdote)
    props.alert(`You clicked: ${anecdote.content}`, 5)
  }

  const style = {
    margin: 10,
    marginLeft: 0
  }

  return(
    <div>
      {props.anecdotes
        .filter(anecdote => props.filtered.includes(anecdote.content))
        .map(anecdote =>
          <div key={anecdote.id} style={style}>
            <div>
              <em>{anecdote.content}</em>
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filtered: state.filtered
  }
}

const mapDispatchToProps = {
  voteFor, alert
}

const ConnectedAnecdoteList = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList