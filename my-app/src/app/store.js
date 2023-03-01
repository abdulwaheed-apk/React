import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import taskReducer from '../features/task/taskSlice'
import exerciseReducer from '../features/exercise/exerciseSlice'
import quoteReducer from '../features/quotes/quoteSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    exercise: exerciseReducer,
    quote: quoteReducer,
  },
})
