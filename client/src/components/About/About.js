import React from 'react';
import './index.css';
/**
 * @author
 * @function About
 **/

const About = (props) => {
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
               <h1>Shiv Shankar Prasad</h1>

               <h3>Full Stack Delveloper</h3>
               <h4> Stacks on whick i work </h4>
               <h5> MERN STACK ( Mongo Db, Express js , React Js, Node Js)</h5>
               <h5>
                  PHP STACK ( MySQL, Vue Js, Laravel, Basic HTML, Bootstrap,CSS)
               </h5>
               <h5>
                  Python STACK ( MySQL/NoSql, Django , React Js, Bootstrap,CSS)
               </h5>
            </div>
            <div className='col-md-3'></div>
         </div>
      </section>
   );
};

export default About;
