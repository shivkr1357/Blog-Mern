import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getOnePost, getPosts } from '../../apis/posts';
import Posts from './posts';
import './index.css';
import Comments from '../comments/comments';
/**
 * @author
 * @function PostDescription
 **/

const PostDescription = (props) => {
   const [posts, setPosts] = useState(null);
   const [post, setPost] = useState({
      author: '',
      title: '',
      tags: '',
      html: '',
      createdAt: '',
      updatedAt: '',
   });
   const { author, html, tags, title, createdAt, updatedAt } = post;
   const path = {
      pathname: '/posts/' + post._id,
   };
   useEffect(() => {
      loadPost();
      window.scrollTo(0, 0);
   }, []);

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
               <div className='col-md-9 content-main'>
                  <div className='article-container'>
                     <div className='post-description'>
                        <h1 className='heading'>{post.title}</h1>
                     </div>
                     <div className='main-content'>{post.html}</div>
                  </div>
                  <div className="add-comments">
                      <div className="show-comment-form">
                           
                              <Comments />
                           
                      </div>
                  </div>
               </div>
               <div className='col-md-3 side-content'>
                  <div className='media'>
                     <img
                        className='mr-3 profile-pic'
                        src='/images/profile-pic.jpg'
                        alt='generic-image-content'
                     />
                  </div>
                  <div className='media-body'>
                     <h5 className='mt-0'>About the Developer</h5>
                     Shiv Shankar Prasad <br />
                     MERN Stack enthusiast
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PostDescription;
