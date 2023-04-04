'use client'
import Link from 'next/link'
import { useState } from 'react'
import {
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
const Header = () => {
  const [theme, setTheme] = useState(true)
  return (
    <header className=' flex justify-between items-center font-medium'>
      <nav>
        <ul className='flex justify-start items-center gap-4'>
          <li className='mr-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='mx-4'>
            <Link href='/about'>About</Link>
          </li>
          <li className='ml-4'>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
        </ul>
      </nav>
      <Link href='/'>
        <h1 className='bg-gray-50/75 text-white p-5 rounded-full'>ab.</h1>
      </Link>
      <nav className='flex justify-end items-center gap-4'>
        <Link href='https://linkedin.com/in/abdulwaheed-apk' target='_blank'>
          <FaLinkedin />
        </Link>
        <Link href='https://linkedin.com/in/abdulwaheed-apk' target='_blank'>
          <FaGithub />
        </Link>
        <Link href='https://linkedin.com/in/abdulwaheed-apk' target='_blank'>
          <FaHackerrank />
        </Link>
        <Link href='https://linkedin.com/in/abdulwaheed-apk' target='_blank'>
          <SiLeetcode className='bg-transparent' />
        </Link>
        <button type='button'>
          <FaSun />
        </button>
        <button type='button'>
          <FaMoon />
        </button>
      </nav>
    </header>
  )
}

export default Header
