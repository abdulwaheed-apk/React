const GamesList = ({ games }) => {
  return (
    <>
      <div>
        {games.map((item) => (
          <div
            key={item.id}
            className='bg-[#0e1a2b] min-h-fit h-auto py-4 md:py-0 md:max-h-40 my-8 flex flex-col md:flex-row justify-start items-center pr-8 gap-x-4 relative'
          >
            <div className='bg-black h-40 w-40'>
              <div className='p-10'></div>
            </div>
            <div className='max-w-xl pl-4 py-4 overflow-hidden'>
              <h3 className='font-semibold text-xl'>{item.name}</h3>
              <h4 className='font-semibold text-base text-[#c1d1e8]'>
                Release Date:{' '}
                {new Date(item.first_release_date).toISOString().slice(0, 10)}
              </h4>
              <p className='font-mulish text-base font-normal text-[#c1d1e8]'>
                {item.summary.substring(0, 240) + '...'}
              </p>
            </div>
            <div className='grid-cols-2 flex justify-center items-center absolute right-4 top-1/2 '>
              <div className='bg-[#5692e8] w-12 h-12 rounded-full flex justify-center items-center '>
                {Math.round(item.rating / 10)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default GamesList
