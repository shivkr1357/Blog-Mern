import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getOnePost } from '../../apis/posts';
import './index.css';

/**
 * @author
 * @function PostDescription
 **/

const PostDescription = (props) => {
   const [post, setPost] = useState({
      author: '',
      title: '',
      tags: '',
      html: '',
      createdAt: '',
      updatedAt: '',
   });
   const { author, html, tags, title, createdAt, updatedAt } = post;
   useEffect(() => {
      loadPost();
      window.scrollTo(0, 0);
   }, []);

   const loadPost = async () => {
      getOnePost(props.match.params.id)
         .then((response) => {
            setPost(response.data.post);
            // const { author, html, tags, title } = response.data.post;
            console.log(response.data.post);
            // author = response.data.post.html;
            // console.log(author, html, tags, title);
         })
         .catch((err) => {
            console.log('Error = ', err);
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
               <div className='col-md-9 main-content '>
                  <div className='card-container'>
                     <div className='post-description'>
                        <h1 className='heading'>{post.title}</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PostDescription;
