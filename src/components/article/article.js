import React from 'react'
import Button from '../button'

const Article = ({ article }) => {
  return (
    <div className='article last:mb-0 mb-6'>
      <div className='image'>
        <img src={article.img} alt='article-image-1' />
      </div>
      <div className='block'>
        <h2 className='title'>{article.title}</h2>
        <h4 className='author'>
          by {article.author} - {article.date}
        </h4>
        <Button
          href={article.link}
          type='link'
          className='w-1/3'
          variant='-secondary'
        >
          Read More
        </Button>
      </div>
    </div>
  )
}

export default Article
