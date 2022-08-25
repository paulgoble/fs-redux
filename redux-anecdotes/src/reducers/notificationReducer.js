import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: null
  },
  reducers: {
    setNotification(state, action) {
      return {
        message: action.payload
      }
    },
    removeNotification() {
      return {
        message: null
      }
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions

var timer = null;
export const alert = (message, duration) => {
  return async dispatch => {
    if (timer) {
      clearTimeout(timer)
    }
    dispatch(setNotification(message))
    timer = setTimeout(() => {
      dispatch(removeNotification())
    }, duration * 1000)
  }
}

export default notificationSlice.reducer