import { configureStore } from '@reduxjs/toolkit'
import exerciseReducer from '../features/exercises/exerciseSlice'
export default configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
})
