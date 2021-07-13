import parseToDigits from '../helpers/parseToDigits'

const TOP_LABEL_USERS = [
  {
    title: 'Most Kills',
    user: {
      name: 'shroud',
      meta: `${parseToDigits(24586)} kills`,
      img: '/images/shroud.png',
    },
  },
  {
    title: 'Most Season Wins',
    user: {
      name: 'chadd',
      meta: `${parseToDigits(447)} wins`,
      img: '/images/chadd.png',
    },
  },
  {
    title: 'Highest Level',
    user: {
      name: 'just9n',
      meta: `Level ${parseToDigits(653)}`,
      img: '/images/just9n.png',
    },
  },
]

export default TOP_LABEL_USERS
