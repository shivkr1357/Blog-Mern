import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

/**
 * @author
 * @function Footer
 **/

const Footer = () => {
   return (
      <footer>
         <div className='main-footer'>
            <div className='container'>
               <div className='row contents'>
                  <div className='col-md-4'>
                     <ul className='unordered-list'>
                        <h4>New Item </h4>
                        <Link to='' class='footer-links'>
                           <i className='fab fa-facebook'></i>
                        </Link>
                     </ul>
                  </div>

                  <div className='col-md-4'>
                     <ul className='Other Stuff'>
                        <h4>Terms </h4>
                        <Link to='' class='footer-links'>
                           <i className='fab fa-facebook'></i>
                        </Link>
                     </ul>
                  </div>

                  <div className='col-md-4'>
                     <ul className='social-media-icons'>
                        <h4>Social Media Icons</h4>
                        <div class='footer-links'>
                           <Link to='' class='footer-links'>
                              <i className='fab fa-facebook'></i>
                           </Link>
                        </div>
                        <div class='footer-links'>
                           <Link to='' class='footer-links'>
                              <i className='fab fa-facebook'></i>
                           </Link>
                        </div>
                        <div class='footer-links'>
                           <Link to='' class='footer-links'>
                              <i className='fab fa-facebook'></i>
                           </Link>
                        </div>
                        <div class='footer-links'>
                           <Link to=''>
                              <i className='fab fa-facebook'></i>
                           </Link>
                        </div>
                     </ul>
                  </div>
               </div>
               <div className='row'>
                  <p className='col-sm privacy-policy'>
                     {' '}
                     &copy; {new Date().getFullYear()} This Corporation|All
                     Right reserved | Terms of Services | Privacy Policy
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
