import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import Button from '../button'

import LEADERBOARD from '../../fixtures/leaderboard'

const Item = ({ user, num }) => (
  <li className='item'>
    <span className={clsx('num', num < 4 && 'text-brand')}>{num}</span>
    <div className='avatar'>
      <Image src={user.img} alt='item' layout='fill' />
    </div>
    <div className='sub'>
      <h3 className='name'>{user.name}</h3>
      <p className='description'>{user.meta}</p>
    </div>
  </li>
)

const Leaderboard = () => {
  return (
    <div>
      <h2 className='text-3xl font-primary mb-6 font-bold text-white'>
        Leaderboard
      </h2>
      <div className='rounded-md shadow-base bg-base-200 bg-opacity-50 p-6'>
        <ul className='leaderboard-list'>
          {LEADERBOARD.map((user, idx) => (
            <Item key={user.name + idx} user={user} num={idx + 1} />
          ))}
        </ul>
        <Button href='#' type='link' variant='secondary'>
          View More
        </Button>
      </div>
    </div>
  )
}

export default Leaderboard
