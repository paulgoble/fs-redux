import { createSlice } from '@reduxjs/toolkit'
import { setAnecdotes } from './anecdoteReducer'
import anecdotesService from '../services/anecdotes.mjs'

const filterSlice = createSlice({
  name: 'filtered',
  initialState: [],
  reducers: {
    setFiltered(state, action) {
      return action.payload
    },
    updateFiltered(state, action) {
      return [
        ...state,
        action.payload
      ]
    }
  }
})

export const { setFiltered, updateFiltered } = filterSlice.actions

export const initialize = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes.sort((a, b) => b.votes - a.votes)))
    dispatch(setFiltered(anecdotes.map(a => a.content)))
  }
}

export default filterSlice.reducer