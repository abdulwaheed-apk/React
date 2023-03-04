import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className='shadow-styles shadow-sm border-b container flex justify-between items-center py-5 px-4 mt-4 rounded-xl max-w-7xl mx-auto bg-[#fdfefe]'>
        <h4>
          <Link
            to={'/'}
            className='font-semibold font-sans text-3xl text-[#FA541C]'
          >
            Exercise Tracker
          </Link>
        </h4>
        <nav>
          <ul className='flex flex-auto'>
            <li>
              <Link
                to={'/signup'}
                className='rounded-md text-[#212b36] font-semibold bg-transparent border  border-[#919eab52] hover:border-[#212b36] px-4 py-2 mr-2'
              >
                Create Account
              </Link>
            </li>
            <li>
              <Link
                to={'/login'}
                className='rounded-md bg-[#FA541C] border  border-[#FA541C] hover:border-[#FA541C] text-white font-semibold px-4 py-2'
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
