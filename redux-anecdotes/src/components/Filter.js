import { useState } from 'react'
import { connect } from 'react-redux'
import { setFiltered } from '../reducers/filterReducer'

const Filter = (props) => {
  const [filterTerm, setFilterTerm] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setFilterTerm(event.target.value)

    const filteredAnecdotes = props.anecdotes.map((a) => a.content)
      .filter((a) => a.includes(event.target.value))
      
    props.setFiltered(filteredAnecdotes)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={filterTerm} onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
  }
}

const mapDispatchToProps = {
  setFiltered
}

const ConnectedFilter = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Filter)

export default ConnectedFilter