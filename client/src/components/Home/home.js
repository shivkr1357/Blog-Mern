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
               <div className='col-md-3 border side-content'>
                  <div className='sidebar-content-single'>
                     <div className='description-div'>
                        <ul>
                           <li>
                              {/* <div className='fas fa-home'></div> */}
                              <Link to='#' className='Link'>
                                 <i className='far fa-hand-point-right'></i>{' '}
                                 Find the Link using tags
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className='col-md-9 main-content border'>
                  <div className='card-container'>
                     {posts &&
                        posts.map((post) => (
                           <Posts post={post} key={post._id} />
                        ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;
