import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
               <div className='col-md-3'>
                  <div className='media'>
                     <img
                        className='mr-3'
                        src='...'
                        alt='generic-image-content'
                     />
                  </div>
                  <div className='media-body'>
                     <h5 className='mt-0'>Post 1</h5>
                     Cras sit amet nibh libero, in gravida nulla. Nulla vel
                     metus scelerisque ante sollicitudin. Cras purus odio,
                     vestibulum in vulputate at, tempus viverra turpis. Fusce
                     condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                     congue felis in faucibus.
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;
