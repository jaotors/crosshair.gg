import React from 'react'
import Navbar from '../navbar'
import { ReactComponent as ApexLogo } from '../../public/images/apex-logo.svg'

const Header = () => {
  return (
    <section className='w-full bg-base-200'>
      <div className='container mx-auto'>
        <div className='flex font-brand text-white'>
          <div
            className='flex justify-center bg-base-300 sm:w-full lg:w-auto'
            style={{ padding: '12px 16px 12px' }}
          >
            <span style={{ marginRight: '14px' }}>
              <ApexLogo />
            </span>
            <span className='cursor-default font-semibold'>Apex Legends</span>
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  )
}

export default Header
