// imports

import * as React from 'react';
import { Link } from 'gatsby';

//components

import Logo from './_logo';

//markup

const Header = () => {
  return (
    <div>
      <header className='frame main-header'>
        <Link to='/' className='logo'>
          <Logo size='25' color='black' />
        </Link>
        <nav className='navigation'>
          <ul>
            <li>
              <Link to='/about' activeClassName='activeLink'>
                About
              </Link>
            </li>
            <li>
              <Link to='/blog' activeClassName='activeLink'>
                Blog
              </Link>
            </li>
            <li>
              <a href='mailto:centanomics@gmail.com?subject=Hi Cent!'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
