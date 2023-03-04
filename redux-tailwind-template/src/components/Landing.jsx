import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <>
      {/* <Header /> */}
      <div className='container max-w-7xl py-16 px-4 mx-auto flex justify-between items-center'>
        <div>
          <h1 className='font-bold normal-case text-6xl max-w-xl leading-snug tracking-tight mb-2'>
            Let us manage and track your activities, you
            <span className='text-[#FA541C]'> Focus On Keep Going</span>.
          </h1>
          <h4 className='my-4 font-medium text-gray-500'>
            Your physical health is just as important as your mental health.
          </h4>
          <div className='my-4 py-6'>
            <Link
              to={'/signup'}
              className='rounded-md text-[#212b36] font-semibold bg-transparent border  border-[#919eab52] hover:border-[#212b36] px-10 py-3'
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className='md:w-1/2 pl-12'>
          <div className='bg-c-img max-w-lg ml-auto'></div>
        </div>
      </div>
    </>
  )
}

export default Landing

// let str = 'Mental Health Is Just As Important As Your Physical Health'
// console.log(str.toLowerCase())

// https://images.pexels.com/photos/939716/pexels-photo-939716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
// https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
