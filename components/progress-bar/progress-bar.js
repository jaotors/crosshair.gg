import clsx from 'clsx'
import React from 'react'

const ProgressBar = ({ percentage, color }) => (
  <div className='progress-bar'>
    <div
      className={clsx('progress', `-${color}`)}
      style={{ width: percentage + '%' }}
    />
  </div>
)

export default ProgressBar
