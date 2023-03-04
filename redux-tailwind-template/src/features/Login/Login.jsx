import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      {/* py-32 */}

      {/* <div className='flex flex-col justify-center items-center'></div> */}
      <div className='max-w-2xl mx-auto bg-white pb-6 mt-20 rounded-3xl shadow-styles'>
        <div className='pt-8 pb-0 px-6'>
          <h4 className='font-semibold text-[#212b36]'>Log in</h4>
          <div className='flex '>
            <p className='text-gray-500 font-normal mr-3'>
              Don't have an account?
            </p>
            <Link to={'/signup'} className='text-[#FA541C] font-medium'>
              Register
            </Link>
          </div>
        </div>
        {/* Form */}
        <div className='pt-1 pb-0 px-6'>
          <form action='' method='post' onSubmit={(e) => e.preventDefault()}>
            <div>
              <fieldset className='border border-[#212b36] py-0 px-2 rounded-lg focus:border-[#FA541C]'>
                <legend className='px-2 font-normal'>Email</legend>
                <input
                  type='email'
                  name='email'
                  placeholder='ali@gmail.io'
                  className='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0 '
                />
              </fieldset>
              <fieldset className='border border-[#212b36] py-1 px-2 my-3 rounded-lg focus:border-[#FA541C]'>
                <legend className='px-2 font-normal'>Password</legend>
                <input
                  type='password'
                  name='password'
                  placeholder='********'
                  className='bg-white focus:outline-none focus:bg-white rounded-lg block w-full text-gray-500 font-normal px-3 py-2 focus:ring-sky-500'
                />
              </fieldset>
              <Link to={'/dashboard'}>
                <button
                  type='submit'
                  className='block w-full bg-[#FA541C] rounded-lg px-3 py-4 font-semibold text-sm text-white'
                >
                  Sign In
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
