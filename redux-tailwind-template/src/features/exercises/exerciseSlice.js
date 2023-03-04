import { createSlice } from '@reduxjs/toolkit'

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    allExercises: [],
  },
  reducers: {
    addNewExercise: (state, action) => {
      console.log('C off CRUD')
      //code
    },
    updateAnyExercise: (state, action) => {
      console.log('U off CRUD')
      //code
    },
    deleteAnyExercise: (state, action) => {
      console.log('D off CRUD')
      //code
    },
  },
})

export const { addNewExercise, updateAnyExercise, deleteAnyExercise } =
  exerciseSlice.actions

export default exerciseSlice.reducer
