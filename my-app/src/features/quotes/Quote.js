import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showQuotes, updateQuote } from './quoteSlice'
import { FiEdit } from 'react-icons/fi'

const Quote = () => {
  const [quoteText, setQuoteText] = useState('')
  const [quoteBy, setQuoteBy] = useState('')
  const [update, setUpdate] = useState({ quoteText: '', quoteBy: '' })

  // Dispatch
  const dispatch = useDispatch()
  // Get State of quoteSlice (i.e allQuotes: [])
  const allQuotes = useSelector((state) => state.quote.allQuotes)

  //   console.log('---update ---', update)

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(showQuotes({ quoteText, quoteBy }))
    setQuoteText('')
    setQuoteBy('')
  }
  // handle Edit
  const handleEdit = (index) => {
    // setQuoteText(allQuotes[index].quoteText)
    // setQuoteBy(allQuotes[index].quoteBy)
    setUpdate(allQuotes[index])
  }
  // handleUpdate
  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateQuote(update))
    setQuoteText('')
    setQuoteBy('')
  }
  return (
    <>
      <div>
        <h1 className='fs-3 text-center'>Add your favorite Quotes</h1>
        <form
          method='post'
          className='form my-2 w-50 mx-auto'
          onSubmit={update.quoteText ? handleUpdate : handleSubmit}
        >
          <div className='list-group my-1'>
            <label htmlFor='quote-text' className='form-label'>
              Quote Text
            </label>
            <input
              type='text'
              name='quote-text'
              className='form-control'
              value={update.quoteText ? update.quoteText : quoteText}
              onChange={(e) =>
                update.quoteText
                  ? setUpdate({ ...update, quoteText: e.target.value })
                  : setQuoteText(e.target.value)
              }
            />
          </div>
          <div className='list-group my-1'>
            <label htmlFor='quote-by' className='form-label'>
              Quote By
            </label>
            <input
              type='text'
              name='quote-by'
              autoComplete='off'
              className='form-control'
              value={update.quoteBy ? update.quoteBy : quoteBy}
              onChange={(e) =>
                update.quoteBy
                  ? setQuoteBy({ ...update, quoteBy: e.target.value })
                  : setQuoteBy(e.target.value)
              }
            />
          </div>
          <input
            type='submit'
            autoComplete='off'
            value={update.quoteText ? 'Update Quote' : 'Add to favorites'}
            className='btn btn-success w-100 my-1'
          />
        </form>

        <div className='container w-50'>
          {allQuotes.map((item, index) => (
            <div
              key={index}
              className='bg-light rounded py-3 px-2 my-3 d-flex justify-content-between '
            >
              <div>
                <h4>{`Quote: ${item.quoteText}`} </h4>
                <p>{`By: ${item.quoteBy}`}</p>
              </div>
              <div>
                <FiEdit onClick={() => handleEdit(index)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Quote
