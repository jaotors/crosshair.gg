import React from 'react'
import cx from 'clsx'
import { css } from 'emotion/macro'
import { rem } from 'polished'

import Card from '../../components/card'

import GlobalLegendRanking from '../../components/global-legend-ranking'
import Leaderboard from '../../components/leaderboard'
import LatestNews from '../../components/latest-news'

import TOP_LABEL_USERS from '../../fixtures/top-label-users'

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
      <div className='container mx-auto pb-20'>
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
          <GlobalLegendRanking />
          <Leaderboard />
        </div>
        <LatestNews />
      </div>
    </section>
  )
}

export default Home
