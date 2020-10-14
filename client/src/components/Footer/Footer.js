import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
   FacebookIcon,
   FacebookShareButton,
   LinkedinIcon,
   LinkedinShareButton,
   TwitterShareButton,
   PinterestShareButton,
   PinterestIcon,
   TelegramShareButton,
   TwitterIcon,
   TelegramIcon,
} from 'react-share';
import './index.css';

/**
 * @author
 * @function Footer
 **/

const Footer = () => {
   return (
      <footer>
         <Fragment>
            <div className='main-footer'>
               <div className='container'>
                  <div className='row contents'>
                     <div>
                        <p>
                           Want to make a custom website for yourself ??
                           <Link to='/contact-us'>Contact Us</Link>
                        </p>
                     </div>
                     
                     <ul className='social-media-icons'>
                        <div className='footer-links'>
                           <FacebookShareButton
                              url={
                                 'https://www.facebook.com/shivshankarkumar.pusa/'
                              }
                           >
                              <FacebookIcon size={32} round={true} />
                           </FacebookShareButton>
                        </div>
                        <div className='footer-links'>
                           <TelegramShareButton>
                              <TelegramIcon size={32} round={true} />
                           </TelegramShareButton>
                        </div>
                        <div className='footer-links'>
                           <LinkedinShareButton>
                              <LinkedinIcon size={32} round={true} />
                           </LinkedinShareButton>
                        </div>
                        <div className='footer-links'>
                           <TwitterShareButton>
                              <TwitterIcon size={32} round={true} />
                           </TwitterShareButton>
                        </div>
                        <div className='footer-links'>
                           <PinterestShareButton>
                              <PinterestIcon size={32} round={true} />
                           </PinterestShareButton>
                        </div>
                     </ul>
                     <div className='nothing'>
                        <p> No content </p>
                     </div>
                  </div>
                  <div className='row'>
                     <p className='col-sm privacy-policy'>
                        {' '}
                        &copy; {new Date().getFullYear()} This Corporation | All
                        Rights reserved |{' '}
                        <Link
                           to='/terms-of-condition'
                           className='terms-condition-link'
                        >
                           Terms of Services
                        </Link>{' '}
                        |{' '}
                        <Link to='/privacy' className='privacy-policy-link'>
                           Privacy Policy
                        </Link>
                     </p>
                  </div>
               </div>
            </div>
         </Fragment>
      </footer>
   );
};

export default Footer;
