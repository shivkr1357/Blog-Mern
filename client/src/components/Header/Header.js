import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.css';

/**
 * @author
 * @function Header
 **/

const Header = () => {
   return (
      <header>
         <nav className='navbar navbar-expand-lg navbar-dark bg-dark static-top'>
            <div className='container'>
               <Link className='navbar-brand' to='#'>
                  <img src={''} className='navbar-logo' alt='Brand Logo' />
               </Link>
               <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarResponsive'
                  aria-controls='navbarResponsive'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
               >
                  <span className='navbar-toggler-icon'></span>
               </button>
               <div className='collapse navbar-collapse' id='navbarResponsive'>
                  <ul className='navbar-nav ml-auto'>
                     <li className='nav-item active'>
                        <Link className='nav-link' to='#'>
                           Home
                           <span className='sr-only'>(current)</span>
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <Link className='nav-link' to='#'>
                           About
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <Link className='nav-link' to='#'>
                           Services
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <Link className='nav-link' to='#'>
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default withRouter(Header);
