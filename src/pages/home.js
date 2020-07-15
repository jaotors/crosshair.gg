import React from 'react';
import cx from 'clsx';
import { css } from 'emotion/macro';
import { rem } from 'polished';

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
      <div className="container mx-auto">
        <h1
          className={cx(
            'text-white font-bold text-center',
            css({ fontSize: rem(72) })
          )}
        >
          Find your <span className="brand-text">Apex Legends</span> stats
        </h1>
      </div>
    </section>
  );
};

export default Home;
