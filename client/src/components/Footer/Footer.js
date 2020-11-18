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
                        <p className='contact-us-link'>
                           Want a website??
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
                        <FacebookShareButton
                           url={'https://www.facebook.com/itsindianguy/'}
                        >
                           <img
                              className='facebook-page'
                              src='/images/facebook-page-image.jpg'
                              alt='facebook-page'
                           />
                           <i>Share on facebook page</i>
                        </FacebookShareButton>
                     </div>
                  </div>
                  <div className='row'>
                     <p className='col-sm privacy-policy'>
                        {' '}
                        &copy; {new Date().getFullYear()} itsindianguy | All
                        Rights reserved
                     </p>
                  </div>
               </div>
            </div>
         </Fragment>
      </footer>
   );
};

export default Footer;
