import React, { useState, useEffect } from 'react';
import { getOnePost, getPosts } from '../../apis/posts';
// import Posts from './posts';
import './index.css';
import Comments from '../comments/comments';
/**
 * @author
 * @function PostDescription
 **/

const PostDescription = (props) => {
   const [posts, setPosts] = useState(null);
   const [id, setId] = useState(null);
   const [post, setPost] = useState({
      author: '',
      title: '',
      tags: '',
      html: '',
      createdAt: '',
   });
   // console.log(props.match.params);
   //
   const { author, html, tags, title, createdAt } = post;
   // const path = {
   //    pathname: '/posts/' + post._id,
   // };
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
      setId(props.match.params.id);
      getOnePost(props.match.params.id)
         .then((response) => {
            setPost(response.data.post);
            // console.log(response.data.post._id);
            // setId(response.data.post._id);
            // const { author, html, tags, title } = response.data.post;
            // console.log(response.data.post);
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
                        <h1 className='heading'>{title}</h1>
                        <small>{tags}</small>
                        <br />
                        <small>
                           {author} {','} {createdAt}
                        </small>
                     </div>
                     <div className='main-content'>{html}</div>
                  </div>
                  <div className='add-comments'>
                     <div className='show-comment-form'>
                        <Comments post_id={id} />
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
                     Shiv Shankar Prasad <br />
                     MERN Stack Enthusiast
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default PostDescription;
