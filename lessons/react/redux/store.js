import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './reducers'

const defaultState = {
  counter: 0
}

export const store = configureStore({
  reducer: counterReducer,
  preloadedState: defaultState
})
