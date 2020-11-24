import React from 'react'
import cx from 'clsx'
import { css } from 'emotion/macro'
import { rem } from 'polished'

import Card from '../components/card'

import GlobalLegendRanking from '../components/global-legend-ranking'

import TOP_LABEL_USERS from '../fixtures/top-label-users'

const Home = () => {
  return (
    <section
      className={cx(
        'home',
        css({
          paddingTop: rem(109),
        })
      )}
    >
      <div className='container mx-auto'>
        <h1
          className={cx(
            'text-white font-bold text-center',
            css({ fontSize: rem(72) })
          )}
        >
          Find your <span className='text-brand'>Apex Legends</span> stats
        </h1>
        <div className='grid grid-cols-3 gap-4 mb-12'>
          {TOP_LABEL_USERS.map((i) => (
            <Card key={i.title} title={i.title} user={i.user} />
          ))}
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <GlobalLegendRanking />
          </div>
          <div>
            <h2 className='text-3xl font-primary mb-6 font-bold text-white'>
              Leaderboards
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
