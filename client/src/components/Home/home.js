import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { getPosts } from '../../apis/posts';

/**
 * @author
 * @function Home
 **/

const Home = () => {
   const [posts, setPosts] = useState(null);

   useEffect(() => {
      loadPosts();
   }, [loadPosts]);

   const loadPosts = async () => {
      await getPosts()
         .then((response) => {
            setPosts(response.data.posts);
            console.log(posts);
         })
         .catch((err) => {
            console.log('Get Post Error', err);
         });
   };
   return (
      <section>
         <div className='container'>
            <div className='row'>
               <div className='col-md-9 main-content border'>
                  <div className='card-container'>
                     {posts &&
                        posts.map((c) => (
                           <div className='card'>
                              <img
                                 className='card-img-top'
                                 src={'/logo.jpeg'}
                                 alt='Card cap'
                              />
                              <div className='card-body'>
                                 <h5 className='card-title'> {c.title} </h5>
                                 <p className='card-text'>{c.html}</p>
                                 <Link to='#' className='btn btn-primary'>
                                    {c.title}
                                 </Link>
                              </div>
                           </div>
                        ))}
                  </div>
               </div>
               <div className='col-md-3 border side-content'>
                  <div className='sidebar-content-single'>
                     <div className='description-div'>
                        <ul>
                           <li>
                              {/* <div className='fas fa-home'></div> */}
                              <Link to='#' className='Link'>
                                 Find the Link using tags
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;
