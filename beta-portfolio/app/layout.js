import Link from 'next/link'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${montserrat.variable}`}>
      <Head>{/* <title>{metadata.title}</title> */}</Head>
      <body className='max-w-7xl mx-auto p-4 min-h-screen relative bg-dark text-light'>
        <Header />
        {children}
        <Footer className='mt-auto' />
      </body>
    </html>
  )
}