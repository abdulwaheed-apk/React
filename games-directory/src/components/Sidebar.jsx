const Sidebar = () => {
  return (
    <aside className='bg-[#0e1a2b] px-4 py-6 flex flex-col justify-start text-left ml-0'>
      <h3 className='text-xl font-semibold'>Filter Results</h3>
      <form method='get' className='py-4'>
        <div>
          <label htmlFor='name' className='font-medium text-base'>
            Name (contains)
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Text String'
            className='bg-[#182c47] text-[#c1d1e8] mt-2 font-normal text-xs px-1 py-1.5 leading-loose font-mulish w-full'
          />
        </div>
        <div>
          <label htmlFor='score' className='font-medium text-base'>
            Minimum Score
          </label>
          <input
            type='number'
            name='name'
            id='name'
            placeholder='1-10'
            className='bg-[#182c47] text-[#c1d1e8] mt-2 font-normal text-xs px-1 py-1.5 leading-loose font-mulish w-full'
          />
        </div>
        <div>
          <label htmlFor='order' className='font-medium text-base block'>
            Order By
          </label>
          <select
            name='order'
            id='order'
            className='bg-[#182c47] text-[#c1d1e8] mt-2 font-normal text-xs px-1 py-2 w-full leading-loose font-mulish'
          >
            <option value=''>Order By</option>
            <option value=''>Release Date</option>
            <option value=''>Name</option>
          </select>
        </div>
        <button
          type='button'
          className='bg-[#5692e8] py-2 px-4 font-medium text-xs my-4 flex justify-end mr-0 ml-auto'
        >
          Clear
        </button>
      </form>
    </aside>
  )
}

export default Sidebar
