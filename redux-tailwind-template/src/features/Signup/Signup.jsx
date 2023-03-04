import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
      <div className='max-w-2xl mx-auto bg-white mt-10 pb-6 rounded-3xl shadow-styles mb-8'>
        <div className='pt-8 pb-0 px-6'>
          <h4 className='font-semibold text-[#212b36]'>Sign up</h4>
          <div className='flex '>
            <p className='text-gray-500 font-normal mr-3'>
              Already have an account?
            </p>
            <Link to={'/login'} className='text-[#FA541C] font-medium'>
              Log in
            </Link>
          </div>
        </div>
        {/* Form */}
        <div className='pt-1 pb-0 px-6'>
          <form action='' method='post' onSubmit={(e) => e.preventDefault()}>
            <div>
              <fieldset className='border border-[#212b36] py-0 px-2 my-2 rounded-lg focus:border-[#FA541C]'>
                <legend className='px-2 font-normal'>Full Name</legend>
                <input
                  type='text'
                  name='full-name'
                  placeholder='Muhammad Ali'
                  className='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0 '
                />
              </fieldset>

              <fieldset className='border border-[#212b36] py-0 px-2 my-2 rounded-lg focus:border-[#FA541C]'>
                <legend className='px-2 font-normal'>Email</legend>
                <input
                  type='email'
                  name='email'
                  placeholder='ali@gmail.io'
                  className='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0 '
                />
              </fieldset>
              <fieldset className='border border-[#212b36] py-0 px-2 my-2 rounded-lg focus:border-[#FA541C]'>
                <legend className='px-2 font-normal'>Username</legend>
                <input
                  type='text'
                  name='username'
                  placeholder='muhammad.ali17'
                  className='bg-white autofill:bg-white focus:outline-none rounded-lg block w-full text-gray-500 font-normal px-3 py-3 my-0 '
                />
              </fieldset>
              <fieldset className='border border-[#212b36] py-1 px-2 my-2 rounded-lg focus:border-[#FA541C]'>
                <legend className='px-2 font-normal'>Create Password</legend>
                <input
                  type='password'
                  name='password'
                  placeholder='********'
                  className='bg-white focus:outline-none focus:bg-white rounded-lg block w-full text-gray-500 font-normal px-3 py-2 focus:ring-sky-500'
                />
              </fieldset>
              <div className='flex content-between items-center pb-2 ml-1'>
                <input type='checkbox' name='t-and-c' className='mr-2' />
                <label htmlFor='t-and-c font-normal'>
                  I agree to{' '}
                  <a href='' className='text-[#FA541C]'>
                    T&C's
                  </a>
                </label>
              </div>
              <Link to={'/login'}>
                <button
                  type='submit'
                  className='block w-full bg-[#FA541C] rounded-lg px-3 py-4 font-semibold text-sm text-white'
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
