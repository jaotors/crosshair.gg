import React from 'react'
import clsx from 'clsx'

const variantCass = (variant) => {
  switch (variant) {
    case 'primary':
    case 'secondary':
      return `-${variant}`
    default:
      return '-primary'
  }
}

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
        <span className={clsx('inner', variantCass(variant))}>{children}</span>
      </a>
    )
  }

  return (
    <button className={clsx('btn', className)} {...props}>
      <span className={clsx('inner', variantCass(variant))}>{children}</span>
    </button>
  )
}

export default Button
