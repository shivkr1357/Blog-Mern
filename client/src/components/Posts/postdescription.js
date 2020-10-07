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
               <div className='col-md-9'>
                  <div className='article-container'>
                     <div className='post-description'>
                        <h1 className='heading'>{post.title}</h1>
                     </div>
                     <div className='main-content'>{post.html}</div>
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

export default PostDescription;
