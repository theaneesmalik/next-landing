import React from 'react'

const Footer = () => {
  return (
    <footer role='contentinfo' className='flex justify-center items-center text-white bg-[#2d2d2d]'>
      <div className='flex flex-wrap justify-center items-center py-10 px-4 text-xl text-center'>
        <p className='font-bold'>© {new Date().getFullYear()} Cogir Senior Living |&nbsp;</p>
        <p className='font-bold'>All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
