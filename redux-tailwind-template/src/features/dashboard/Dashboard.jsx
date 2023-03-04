import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
const Dashboard = () => {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <div className='p-5 max-w-7xl mx-auto'>
        <div className=''>
          <button
            type='button'
            onClick={openModal}
            className='rounded-md min-w-max px-4 py-2 text-white font-semibold bg-[#FA541C]'
          >
            New Exercise <AiOutlinePlusCircle />
          </button>
        </div>
        <div className='fixed inset-0 flex items-center justify-center'></div>
        <div className='text-center'>
          <p>Logged in user home page </p>
          <h4>quote API</h4>
        </div>
        create dashboard page
      </div>
    </>
  )
}

export default Dashboard
