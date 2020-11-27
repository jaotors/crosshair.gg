import React from 'react'

import Article from '../article'
import Button from '../button'

import LATEST_NEWS from '../../fixtures/latest-news'

const LatestNews = () => {
  return (
    <>
      <h2 className='text-white text-4xl font-primary mb-6 font-bold'>
        Latest News
      </h2>
      {LATEST_NEWS.map((article, idx) => (
        <Article article={article} key={idx} />
      ))}
      <Button className='w-full' variant='-secondary'>
        Load More Contet
      </Button>
    </>
  )
}

export default LatestNews
