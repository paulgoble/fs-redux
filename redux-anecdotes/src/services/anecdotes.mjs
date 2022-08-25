import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const create = async (newAnecdote) => {
  const request = axios.post(baseUrl, newAnecdote)
  const response = await request
  return response.data
}

const update = async (anecdote) => {
  const request = axios.put(baseUrl.concat('/', anecdote.id), anecdote)
  const response = await request
  return response.data
}

const anecdotesService = {
  getAll,
  create,
  update
}
export default anecdotesService