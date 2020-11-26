import React from 'react'
import clsx from 'clsx'

const Button = ({ type = 'button', children, variant, ...props }) => {
  if (type === 'link') {
    return (
      <a href={props.href} className='btn' {...props}>
        <span className={clsx('inner', variant)}>{children}</span>
      </a>
    )
  }

  return (
    <button className='btn' {...props}>
      <span className={clsx('inner', variant)}>{children}</span>
    </button>
  )
}

export default Button
