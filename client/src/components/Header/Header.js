import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.css';
import { isAuthenticated, logout } from '../Helpers/auth';

const Header = ({ history }) => {
   const handleLogout = (evt) => {
      logout(() => {
         history.push('/signIn');
      });
   };

   const showNavigation = () => (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
         <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
         >
            <span className='navbar-toggler-icon'></span>
         </button>
         <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <Link to='/' className='navbar-brand'>
               Shiv Shankar Blog
            </Link>
            <form className='form-inline my-2 my-lg-0'>
               <input
                  className='form-control mr-sm-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
               />
               <button
                  className='btn btn-outline-success my-2 my-sm-0'
                  type='submit'
               >
                  Search
               </button>
            </form>
            <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
               {!isAuthenticated() && (
                  <Fragment>
                     <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                           <i className='fas fa-home'></i> Home
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <Link to='/signup' className='nav-link'>
                           <i className='fas fa-edit'></i> SignUp
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <Link to='/login' className='nav-link'>
                           <i className='fas fa-sign-in-alt'></i> SignIn
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <Link className='nav-link' to='/about'>
                           About
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <Link className='nav-link' to='/services'>
                           Services
                        </Link>
                     </li>
                  </Fragment>
               )}

               {isAuthenticated() && isAuthenticated().role === 0 && (
                  <Fragment>
                     <li className='nav-item'>
                        <Link to='/user/dashboard' className='nav-link'>
                           <i className='fas fa-home'></i> Dashboard
                        </Link>
                     </li>
                  </Fragment>
               )}

               {isAuthenticated() && isAuthenticated().role === 1 && (
                  <Fragment>
                     <li className='nav-item'>
                        <Link to='/admin/dashboard' className='nav-link'>
                           <i className='fas fa-home'></i> Dashboard
                        </Link>
                     </li>
                  </Fragment>
               )}

               {isAuthenticated() && (
                  <Fragment>
                     <li className='nav-item'>
                        <button className='btn btn-info' onClick={handleLogout}>
                           <i className='fas fa-sign-out-alt'></i> Logout
                        </button>
                     </li>
                  </Fragment>
               )}
            </ul>
         </div>
      </nav>
   );

   return <header id='header'>{showNavigation()}</header>;
};

export default withRouter(Header);
