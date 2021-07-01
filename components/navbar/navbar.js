import React from 'react';
import { ReactComponent as Logo } from '../../public/images/logo.svg';

const Navbar = () => {
  return (
    <div
      className="w-full bg-base-100 bg-opacity-75 absolute"
      style={{ top: '48px' }}
    >
      <nav className="container mx-auto">
        <ul className="list-none m-0 flex items-center text-white font-primary font-semibold">
          <li className="mr-6">
            <Logo />
          </li>
          <li className="navbar-links active">
            <a href="#">Home</a>
          </li>
          <li className="navbar-links">
            <a href="#">Leaderboards</a>
          </li>
          <li className="navbar-links">
            <a href="#">Tier List</a>
          </li>
          <li className="navbar-links">
            <a href="#">Tournaments</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
