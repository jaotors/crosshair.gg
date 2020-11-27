import React from 'react'
import clsx from 'clsx'

const Button = ({
  type = 'button',
  children,
  className,
  variant,
  ...props
}) => {
  if (type === 'link') {
    return (
      <a href={props.href} className={clsx('btn', className)} {...props}>
        <span className={clsx('inner', variant)}>{children}</span>
      </a>
    )
  }

  return (
    <button className={clsx('btn', className)} {...props}>
      <span className={clsx('inner', variant)}>{children}</span>
    </button>
  )
}

export default Button
