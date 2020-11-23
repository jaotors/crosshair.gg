import lifeline from '../assets/images/lifeline.png'
import wraith from '../assets/images/wraith.png'
import bangalore from '../assets/images/bangalore.png'
import bloodhound from '../assets/images/bloodhound.png'
import pathfinder from '../assets/images/pathfinder.png'
import mirage from '../assets/images/mirage.png'
import gibraltar from '../assets/images/gibraltar.png'
import caustic from '../assets/images/caustic.png'
import octane from '../assets/images/octane.png'

const LEGENDS = [
  {
    legend: 'Lifeline',
    type: 'Support',
    pickRate: 18.5,
    winRate: 50.03,
    img: lifeline,
  },
  {
    legend: 'Wraith',
    type: 'Offense',
    pickRate: 17.1,
    winRate: 49.79,
    img: wraith,
  },
  {
    legend: 'Bangalore',
    type: 'Offense',
    pickRate: 17.1,
    winRate: 50.28,
    img: bangalore,
  },
  {
    legend: 'Bloodhound',
    type: 'Offense',
    pickRate: 14.0,
    winRate: 51.01,
    img: bloodhound,
  },
  {
    legend: 'Pathfinder',
    type: 'Support',
    pickRate: 10.2,
    winRate: 50.98,
    img: pathfinder,
  },
  {
    legend: 'Mirage',
    type: 'Offense',
    pickRate: 8.5,
    winRate: 51.52,
    img: mirage,
  },
  {
    legend: 'Gibraltar',
    type: 'Defense',
    pickRate: 5.2,
    winRate: 49.78,
    img: gibraltar,
  },
  {
    legend: 'Caustic',
    type: 'Defense',
    pickRate: 4.9,
    winRate: 50.73,
    img: caustic,
  },
  {
    legend: 'Octane',
    type: 'Offense',
    pickRate: 3.9,
    winRate: 52.78,
    img: octane,
  },
]

export default LEGENDS