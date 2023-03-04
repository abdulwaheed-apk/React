import { useSelector, useDispatch } from 'react-redux'
import styles from './Exercise.module.css'
import {
  addNewExercise,
  updateAnyExercise,
  deleteAnyExercise,
} from './exerciseSlice'

const Exercise = () => {
  const allExercises = useSelector((state) => state.exercise.allExercises)
  const dispatch = useDispatch()

  return (
    <div>
      <h4 className='text-center p-5 min-w-max text-bold text-orange-600'>
        This page is to only add exercises
      </h4>
      <div className='max-w-7xl mx-auto'>
        <form action='' method='post'>
          <div className='flex flex-auto justify-between items-center mt-6 mb-4 px-4'>
            <label className='block w-2/5'>
              <span className='block text-sm font-medium text-slate-700 '>
                Activity Name
              </span>
              <input
                type='text'
                name='run'
                placeholder='Morning running for 10km in park.'
                className='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none
       focus:border-[#FA541C] focus:ring-1 focus:ring-[#FA541C]'
              />
            </label>
            <label className='block w-2/5'>
              <span className='block text-sm font-medium text-slate-700'>
                Username
              </span>
              <input
                type='email'
                name='email'
                placeholder='ali@gmail.io'
                className='mt-1 block w-full mb-4 px-3 py-3 bg-white border border-[#212b36] rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none
       focus:border-[#FA541C] focus:ring-1 focus:ring-[#FA541C]'
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Exercise
