// imports

import * as React from 'react';

// components

import Layout from '../components/_layout';
import Seo from '../components/_seo';

// markup

const AboutPage = () => {
  return (
    <Layout>
      <Seo
        title="Portfolio"
        description="Learn more about Centanomics and his interests professionally and personally here."
      />
      <section className="frame about">
        <h1>About</h1>
        <p>
          Hello, I'm Shannon - also known as Cent - A Full Stack Developer in
          the Atlanta Area. I enjoy taking ideas and bringing them to life
          through robust web applications. I first got interested in web
          development back in 2016 when I created a website for my high school
          robotics team. I've enjoyed web development ever since!
        </p>
        <p>
          A Problem solver, an organised person, and an eager learner. A person
          who always tries to have fun with what I'm doing. I am a fan of
          hiking, tea, foreign languages, and Legends of Runeterra. I'm
          currently learning German, but I have studied French and Spanish in
          the past.
        </p>
        <p>Technologies that I have worked with recently:</p>
      </section>
    </Layout>
  );
};

export default AboutPage;
