import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showAllExercises } from './exerciseSlice'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

const Exercise = () => {
  const [exercise, setExercise] = useState('')
  const dispatch = useDispatch()
  const exercises = useSelector((state) => state.exercise.allExercises)

  function handleSubmit(e) {
    e.preventDefault()
    let id = Math.floor(Math.random() * 100)
    dispatch(showAllExercises({ exerciseName: exercise, id }))
    // console.log(exercise)
    setExercise('')
  }
  function handleEdit() {
    console.log('Edit function')
  }
  function handleDelete() {
    console.log('Delete function')
  }

  return (
    <>
      <div className='container w-50 mx-auto'>
        <form method='post' className='form' onSubmit={handleSubmit}>
          <div className='my-2 mx-auto'>
            <label htmlFor='exercise-name' className='form-label'>
              Exercise Name
            </label>
            <input
              type='text'
              name='exercise-name'
              className='form-control'
              autoComplete='off'
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
            />
          </div>
          <input
            type='submit'
            value='Submit'
            className='btn btn-warning w-25'
          />
        </form>
        <div className='container w-100 mx-auto my-3 p-3 bg-light'>
          <ul>
            {exercises.map((item) => (
              <div key={item.id} className='d-flex justify-content-between'>
                <li className='list-group fw-bold text-capitalize'>
                  {item.exerciseName}{' '}
                </li>
                <div>
                  <FiEdit onClick={handleEdit} />
                  <AiOutlineDelete
                    onClick={handleDelete}
                    className='text-danger '
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
