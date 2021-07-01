import React from 'react'
import {
  Twitter as TwitterIcon,
  Twitch as TwitchIcon,
  Facebook as FbIcon,
} from '@styled-icons/boxicons-logos'

import { ReactComponent as Logo } from '../../public/images/logo.svg'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='content container mx-auto'>
        <div className='logo text-white ml-6'>
          <Logo className='mb-3' />
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
        <div className='links-list'>
          <ul>
            <li>Features</li>
            <li>
              <a href='#'>Leaderboards</a>
            </li>
            <li>
              <a href='#'>Tier lists</a>
            </li>
            <li>
              <a href='#'>Tournaments</a>
            </li>
          </ul>
          <ul>
            <li>Company</li>
            <li>
              <a href='#'>About us</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Contact us</a>
            </li>
          </ul>
          <ul>
            <li>Further Information</li>
            <li>
              <a href='#'>Terms and Conditions</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className='social-media'>
          <ul>
            <li>Follow us</li>
            <li>
              <ul className='flex'>
                <li className='circle-icon twitter-icon'>
                  <TwitterIcon />
                </li>
                <li className='ml-4 circle-icon twitch-icon'>
                  <TwitchIcon />
                </li>
                <li className='ml-4 circle-icon fb-icon'>
                  <FbIcon />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
