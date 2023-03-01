import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showAllExercises, updateExercises } from './exerciseSlice'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

const Exercise = () => {
  const [exercise, setExercise] = useState('')
  const [update, setUpdate] = useState({ id: '', exerciseName: '' })
  // console.log(update);
  const dispatch = useDispatch()
  const exercises = useSelector((state) => state.exercise.allExercises)
  function handleSubmit(e) {
    e.preventDefault()
    let id = Math.floor(Math.random() * 100)
    dispatch(showAllExercises({ exerciseName: exercise, id }))
    setExercise('')
  }
  function handleEdit(index) {
    setUpdate(exercises[index])
    // console.log('--Current exercises--', exercises[index])
  }
  function handleUpdate(e) {
    e.preventDefault()
    console.log(update)
    dispatch(
      updateExercises({ id: update.id, exerciseName: update.exerciseName })
    )
    setExercise('')
    setUpdate('')
  }
  function handleDelete() {
    console.log('Delete function')
  }

  return (
    <>
      <div className='container w-50 mx-auto'>
        <form
          method='post'
          className='form'
          onSubmit={update.id ? handleUpdate : handleSubmit}
        >
          <div className='my-2 mx-auto'>
            <label htmlFor='exercise-name' className='form-label'>
              Exercise Name
            </label>
            <input
              type='text'
              name='exercise-name'
              className='form-control'
              autoComplete='off'
              value={update.id ? update.exerciseName : exercise}
              onChange={(e) =>
                update.id
                  ? setUpdate({ ...update, exerciseName: e.target.value })
                  : setExercise(e.target.value)
              }
            />
          </div>
          <input
            type='submit'
            value={update.id ? 'Update' : 'Submit'}
            className='btn btn-warning w-25'
          />
        </form>

        <div className='container w-100 mx-auto my-3 p-3 bg-light'>
          <ul>
            {exercises.map((item, index) => (
              <div key={index} className='d-flex justify-content-between'>
                <li className='list-group fw-bold text-capitalize'>
                  {item.exerciseName}{' '}
                </li>
                <div>
                  <FiEdit onClick={() => handleEdit(index)} />
                  <AiOutlineDelete
                    onClick={handleDelete}
                    className='text-danger'
                  />
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
export default Exercise
