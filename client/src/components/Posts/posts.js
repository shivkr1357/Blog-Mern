import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className='card' key={post._id}>
         <img className='card-img-top' src={'/logo.jpeg'} alt='Card cap' />
         <div className='card-body'>
            <h5 className='card-title'> {post.title} </h5>
            <small>{post.tags} </small>
            <p className='card-text'>{post.html}</p>
            <span>{renderDate(post.createdAt)}</span>
            <Link to={path} params={{ id: post._id }}>
               {' ' + post.title}
            </Link>
         </div>
      </div>
   );
};

export default Posts;
