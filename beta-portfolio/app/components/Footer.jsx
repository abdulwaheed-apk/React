import { AiFillHeart } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='absolute bottom-2 left-20 right-20 '>
      <div className='grid grid-flow-col'>
        <h2 className='grid-cols-4'>&copy; 2023, All Rights Reserved.</h2>
        <h2 className='grid-cols-4'>
          Made with <AiFillHeart className='inline-block' /> by Abdul Waheed
        </h2>
        <h2 className='grid-cols-4'>Privacy policy</h2>
      </div>
    </div>
  )
}

export default Footer
