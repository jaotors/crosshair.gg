import { parseToDigits } from '../helpers/parseToDigits'

import shroud from '../assets/images/shroud.png'
import chadd from '../assets/images/chadd.png'
import just9n from '../assets/images/just9n.png'

const TOP_LABEL_USERS = [
  {
    title: 'Most Kills',
    user: {
      name: 'shroud',
      meta: `${parseToDigits(24586)} kills`,
      img: shroud,
    },
  },
  {
    title: 'Most Season Wins',
    user: {
      name: 'chadd',
      meta: `${parseToDigits(447)} wins`,
      img: chadd,
    },
  },
  {
    title: 'Highest Level',
    user: {
      name: 'just9n',
      meta: `Level ${parseToDigits(653)}`,
      img: just9n,
    },
  },
]

export default TOP_LABEL_USERS
