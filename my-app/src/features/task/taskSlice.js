import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
}
export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.tasks = state.tasks.concat(action.payload)
    },
    updateTasks: (state, action) => {
      const { index, value } = action.payload
      // console.log(index)
      // console.log(value)
      state.tasks = state.tasks.map((item, i) => {
        // console.log(i + '  :   + index)
        if (index === i) {
          console.log(true)
          console.log(value)
          return value
        }
        return item
      })
    },
  },
})

export const { addTasks, updateTasks } = taskSlice.actions

export default taskSlice.reducer
