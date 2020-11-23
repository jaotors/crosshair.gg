import React from 'react'

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
          <img src={user.img} />
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
