import { createSlice } from '@reduxjs/toolkit'
import { updateFiltered } from './filterReducer'
import anecdotesService from '../services/anecdotes.mjs'

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    upvote(state, action) {
      return state
        .map(anecdote => anecdote.id === action.payload.id ? {...anecdote, votes: anecdote.votes + 1} : anecdote)
        .sort((a, b) => b.votes - a.votes)
    },
    createNew(state, action) {
      return [
        ...state,
        action.payload
      ]
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { upvote, createNew, setAnecdotes } = anecdotesSlice.actions

const getId = () => (100000 * Math.random()).toFixed(0)

export const create = (newAnecdote) => {
  return async dispatch => {
    anecdotesService.create({
      content: newAnecdote,
      id: getId(),
      votes: 0
    })
    .then(anecdote => dispatch(createNew(anecdote)))
    .then(response => dispatch(updateFiltered(response.payload.content)))
  }
}

export const voteFor = (anecdote) => {
  return async dispatch => {
    anecdotesService.update({
      ...anecdote,
      votes: anecdote.votes + 1
    })
    .then(anecdote => dispatch(upvote(anecdote)))
    .then(response => dispatch(updateFiltered(response.payload.content)))
  }
}

export default anecdotesSlice.reducer