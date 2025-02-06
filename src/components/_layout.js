// imports

import * as React from 'react';

// components
import Header from './Header';
import Footer from './Footer';

// markup

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
