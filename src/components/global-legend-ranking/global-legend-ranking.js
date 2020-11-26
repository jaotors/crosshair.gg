import React from 'react'
import ProgressBar from '../progress-bar'
import LEGENDS from '../../fixtures/legends'

const Item = ({ legend }) => (
  <li className='grid grid-cols-3 gap-8 text-white mb-8 last:mb-0'>
    <div className='flex items-center'>
      <img className='mr-4 rounded-full' src={legend.img} alt='' />
      <div className='avatar-description'>
        <p className='mb-2'>{legend.legend}</p>
        <p className='font-secondary opacity-50'>{legend.type}</p>
      </div>
    </div>
    <div className='flex-col self-center'>
      <p className='mb-4'>{legend.pickRate}%</p>
      <ProgressBar percentage={legend.pickRate} color='blue' />
    </div>
    <div className='flex-col self-center'>
      <p className='mb-4'>{legend.winRate}%</p>
      <ProgressBar percentage={legend.winRate} color='green' />
    </div>
  </li>
)

const LegendRanking = () => (
  <div className='col-span-2 legend-ranking'>
    <h2 className='text-3xl font-primary mb-6 font-bold text-white'>
      Global Legend Ranking
    </h2>
    <div className='rounded-md shadow-DEFAULT bg-base-200 bg-opacity-50'>
      <div className='rounded-t-md px-6 py-4 grid grid-cols-3 gap-2 text-white font-bold bg-base-200'>
        <p>Legend</p>
        <p>Pick Rate</p>
        <p>Win Rate</p>
      </div>
      <ul className='py-12 px-6'>
        {LEGENDS.map((legend) => (
          <Item key={legend.legend} legend={legend} />
        ))}
      </ul>
    </div>
  </div>
)

export default LegendRanking
