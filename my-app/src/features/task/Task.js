import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTasks, updateTasks } from '../task/taskSlice'
import { AiOutlineEdit } from 'react-icons/ai'

const Task = () => {
  const [text, setText] = useState('')
  const [updateValue, setUpdateValue] = useState('')
  const [updatedIndex, setUpdatedIndex] = useState(0)
  const dispatch = useDispatch()
  const allTasks = useSelector((state) => state.task.tasks)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTasks(text))
    setText('')
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    console.log('update')
    dispatch(updateTasks({ index: updatedIndex, value: updateValue }))
  }
  const handleEdit = (i) => {
    console.log('Edit me' + i)
    setUpdatedIndex(i)
    setUpdateValue(allTasks[i])
  }
  return (
    <>
      <div className='container mx-auto'>
        <form method='post' onSubmit={handleSubmit} className='form w-25 my-3 '>
          <input
            className='form-control my-2'
            type='text'
            name='text'
            id='text'
            placeholder='Enter Task'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type='submit' className='btn btn-secondary my-1'>
            Add task
          </button>
        </form>
        <form action='' onSubmit={handleUpdate} className='w-25 my-3'>
          <input
            className='form-control my-2'
            type='text'
            name='text'
            id='updateInp'
            placeholder='Enter Task'
            value={updateValue}
            onChange={(e) => setUpdateValue(e.target.value)}
          />
          <button type='submit' className='btn btn-secondary my-1'>
            Update task
          </button>
        </form>
        <ul>
          <div>
            {' '}
            {allTasks.map((e, i) => (
              <div key={i} className='d-flex justify-space-between'>
                <li>{e}</li>
                <AiOutlineEdit
                  className='w-25'
                  onClick={() => {
                    handleEdit(i)
                  }}
                />
              </div>
            ))}
          </div>
        </ul>
      </div>
    </>
  )
}

export default Task
