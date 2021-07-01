import React from 'react'
import Head from 'next/head'

import Card from '../../components/card'

import GlobalLegendRanking from '../../components/global-legend-ranking'
import Leaderboard from '../../components/leaderboard'
import LatestNews from '../../components/latest-news'

import TOP_LABEL_USERS from '../../fixtures/top-label-users'

const Home = () => {
  return (
    <section className='home'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Apex Legends is a battle royale game that was released in February 4, 2019, As the game is still pretty new, there is a greate need to track statistics and substatial information revolving around the game. This will primarily help players to get more viewers or be scouted by an esports org for future competitve endeavors.'
        />
        <title>Crosshair.gg - Home</title>
      </Head>
      <div className='container mx-auto pb-20'>
        <h1 className='title'>
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
