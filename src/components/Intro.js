// imports

import * as React from 'react';
import { Link } from 'gatsby';

// markup

const Intro = () => {
  return (
    <div>
      <main className='frame intro'>
        <section>
          <div className='description'>
            <h2>Hello, world!</h2>
            <h1>
              I'm <span>Shannon</span>
            </h1>
            <p>I design and develop Full Stack Applications</p>
            <nav>
              <a href='#projects'>View Projects</a>
              <span> or </span>
              <Link to='/about'>Read About Me</Link>
            </nav>
          </div>
          <button className='image'>
            <img src='/me.png' alt='minimalist Shannon' />
          </button>
        </section>
      </main>
    </div>
  );
};

export default Intro;
