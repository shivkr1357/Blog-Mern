import React from 'react';
// import { Link } from 'react-router-dom';
import './contact-us.css';

/**
 * @author
 * @function ContactUs
 **/

const ContactUs = (props) => {
   return (
      <section className='contact-us-section'>
         <div className='row'>
            <div className='col-md-3'></div>
            <div id='profile-image' className='col-md-6'>
               <img
                  className='contact-us-image'
                  src='/images/profile-pic.jpg'
                  alt='profile'
               />
               <div className='email-container'>
                  <div className='email'>
                     <h3>Email: shivkr1357@gmail.com</h3>
                  </div>
               </div>
               <div className='moblie-container'>
                  <div className='mobile'>
                     <h3>Contact-No: +91 7903665379</h3>
                  </div>
               </div>
            </div>
            <div className='col-md-3'></div>
         </div>
      </section>
   );
};

export default ContactUs;
