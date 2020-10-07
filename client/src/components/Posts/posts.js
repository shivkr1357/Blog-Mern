import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

/**
 * @author
 * @function Posts
 **/

const Posts = (props) => {
   const { post } = props;
   const path = {
      pathname: '/posts/' + post._id,
   };
   const renderDate = (dateString) => {
      const monthNames = [
         'January',
         'February',
         'March',
         'April',
         'May',
         'June',
         'July',
         'August',
         'September',
         'October',
         'November',
         'December',
      ];

      const date = new Date(dateString);

      return `${
         monthNames[date.getMonth()]
      } ${date.getDate()} ${date.getFullYear()}`;
   };

   return (
      <article className='article' key={post._id}>
         <div className='article-heading'>
            <i>
               <b>
                  <h5 className='article-title'> {post.title} </h5>
               </b>
            </i>
         </div>
         <div className='article-information'>
            <span>{' ' + renderDate(post.createdAt)}</span>
            <small>{' ' + post.tags} </small>
            <Link to={path} params={{ id: post._id }}>
               {' ' + 'Read More'}
            </Link>
         </div>
         <img className='article-img-top' src={'/logo.jpeg'} alt='Card cap' />
         <div className='article-body'>
            <p className='article-text'>{post.html}</p>
         </div>
      </article>
   );
};

export default Posts;
