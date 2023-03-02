import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  allQuotes: [],
}
export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    showQuotes: (state, action) => {
      const { quoteText, quoteBy, id } = action.payload
      console.log(
        'Created: Txt > ' + quoteText + ' ---BY > ' + quoteBy + ' ---ID > ' + id
      )
      state.allQuotes = state.allQuotes.concat([{ quoteText, quoteBy, id }])
    },
    updateQuote: (state, action) => {
      const { quoteText, quoteBy, id } = action.payload
      console.log('-- in updateQuote reducer --', quoteText, quoteBy, id)
      const updatedQuote = state.allQuotes.map((item) => {
        if (item.id === id) {
          item = { id: id, quoteText: quoteText, quoteBy: quoteBy }
        }
        return item
      })
      state.allQuotes = updatedQuote
    },
  },
})

export const { showQuotes, updateQuote } = quoteSlice.actions

export default quoteSlice.reducer
