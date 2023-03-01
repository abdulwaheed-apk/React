import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  allQuotes: [],
}
export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    showQuotes: (state, action) => {
      const { quoteText, quoteBy } = action.payload
      state.allQuotes = state.allQuotes.concat([{ quoteText, quoteBy }])
    },
    updateQuote: (state, action) => {
      const { quoteText, quoteBy } = action.payload
      console.log('-- in updateQuote reducer --', quoteText, quoteBy)
    },
  },
})

export const { showQuotes, updateQuote } = quoteSlice.actions

export default quoteSlice.reducer
