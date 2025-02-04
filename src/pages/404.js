import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/_seo';

const NotFoundPage = () => {
  return (
    <main>
      You took a wrong turn huh?{' '}
      <Link to='/'>Click here to get back to safety.</Link>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title='404' description='You got lost, huh?' />;
