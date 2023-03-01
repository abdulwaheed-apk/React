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
    updateExercises: (state, action) => {
      const { exerciseName, id } = action.payload
      const newExercises = state.allExercises.map((item) => {
        if (item.id === id) {
          item = { id: id, exerciseName: exerciseName }
        }
        return item
      })
      state.allExercises = newExercises
    },
  },
})

export const { showAllExercises, updateExercises } = exerciseSlice.actions
export default exerciseSlice.reducer
