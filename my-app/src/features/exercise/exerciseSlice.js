import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allExercises: [],
}

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    showAllExercises: (state, action) => {
      const { exerciseName, id } = action.payload
      state.allExercises = state.allExercises.concat([{ exerciseName, id }])
    },
  },
})

export const { showAllExercises } = exerciseSlice.actions
export default exerciseSlice.reducer
