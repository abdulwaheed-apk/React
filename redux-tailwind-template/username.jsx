const username = () => {
  return (
    <div>
      <label className='block'>
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
  )
}

export default username
