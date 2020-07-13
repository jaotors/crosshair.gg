import React from 'react';
import { ReactComponent as ApexLogo } from '../assets/apex-logo.svg';

const Header = () => {
  return (
    <section className="w-full bg-base-200">
      <div className="container mx-auto h-auto">
        <div className="flex font-brand text-white">
          <div
            className="flex justify-center bg-base-300"
            style={{ padding: '12px 16px 12px' }}
          >
            <span style={{ marginRight: '14px' }}>
              <ApexLogo />
            </span>
            <span>Apex Legends</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
