import React from 'react'
import Image from 'next/image'

const Card = ({ title, user }) => {
  return (
    <div className='card'>
      <div className='header'>
        <h3 className='title'>{title}</h3>
        <a href='#' className='link text-brand'>
          View All
        </a>
      </div>
      <div className='content'>
        <div className='avatar rounded-full'>
          <Image src={user.img} alt='card' layout='fill' />
        </div>
        <div className='sub'>
          <h3 className='name'>{user.name}</h3>
          <p className='description'>{user.meta}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
