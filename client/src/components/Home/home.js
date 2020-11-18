import React, { useState, useEffect } from 'react';
import './home.css';
import { getPosts } from '../../apis/posts';
import Posts from '../Posts/posts';

/**
 * @author
 * @function Home
 **/

const Home = () => {
   const [posts, setPosts] = useState(null);

   useEffect(() => {
      loadPosts();
   }, []);

   const loadPosts = async () => {
      await getPosts()
         .then((response) => {
            setPosts(response.data.posts);
         })
         .catch((err) => {
            console.log('Get Post Error', err);
         });
   };

   return (
      <section>
         <div className='container'>
            <div className='row'>
               <div className='col-md-9 main-contents'>
                  {/* <div className='top-image'>
                     <img src={'logo.jpeg'} />
                  </div> */}
                  <div className='article'>
                     <div className='article-container'>
                        {posts &&
                           posts.map((post) => (
                              <Posts post={post} key={post._id} />
                           ))}
                     </div>
                  </div>
               </div>
               <div className='col-md-3 side-content'>
                  <div className='media'>
                     <img
                        className='mr-3 profile-pic'
                        src='/images/profile-pic.jpg'
                        alt='generic-content'
                     />
                  </div>
                  <div className='media-body'>
                     <h5 className='mt-0'>About the Developer</h5>
                     Shiv Shankar Prasad MERN Stack enthusiast
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;
