import React, { useState } from 'react';
import { createComment } from '../../apis/comments';
import isEmpty from 'validator/lib/isEmpty';
import { message, showSuccessMsg, showErrMsg } from '../Helpers/messages';
import { showLoading } from '../Helpers/loading';

/**
 * @author
 * @function Comments
 **/

const Comments = (props) => {
   console.log(props);
   const [errorMsg, setErrorMsg] = useState('');
   const [id, setId] = useState('');
   const [successMsg, setSuccessMsg] = useState('');
   const [loading, setLoading] = useState(false);
   const [commentData, setCommentData] = useState({
      comment: '',
      name: '',
      email: '',
      website: '',
   });

   const { comment, name, email, website } = commentData;

   const handleChange = (e) => {
      setId(props.post_id);
      setCommentData({
         ...commentData,
         [e.target.name]: e.target.value,
      });
      setErrorMsg(null);
      setSuccessMsg(null);
   };
   const handleSubmit = (e) => {
      // const {comment, name , email, website} = commentData;
      // const data = {comment, name , email, website };
      e.preventDefault();

      if (isEmpty(comment)) {
         setErrorMsg(message.commentRequired);
      } else if (isEmpty(name)) {
         setErrorMsg(message.nameRequired);
      } else if (isEmpty(email)) {
         setErrorMsg(message.emailRequired);
      } else {
         const { comment, name, email, website, id } = commentData;
         const data = { comment, name, email, website, id };
         setCommentData({
            ...commentData,
         });
         setLoading(true);
         createComment(data)
            .then((response) => {
               console.log(response);
            })
            .catch((err) => {
               console.log('error : ', err);
            });
      }
   };
   return (
      <div className='comments-section'>
         {loading && showLoading(loading)}
         {successMsg && showSuccessMsg(successMsg)}
         {errorMsg && showErrMsg(errorMsg)}
         <div className='comment-form'>
            <div className='card-header'>
               <h5 className='card-title'>Leave a reply</h5>
            </div>
            <form id='create-comment' onSubmit={handleSubmit}>
               <div className='card-body'>
                  <div className='row'>
                     <div className='form-group col-md-6'>
                        <label htmlFor='comment'>
                           Comments<span className='asterik-red'>*</span>
                        </label>
                        <textarea
                           className='form-control'
                           rows='4'
                           cols='12'
                           name='comment'
                           id='comment'
                           placeholder='Comment...'
                           value={comment}
                           onChange={handleChange}
                        ></textarea>
                     </div>
                     <div className='form-group col-md-6'>
                        <label htmlFor='name'>
                           Name<span className='asterik-red'>*</span>
                        </label>
                        <input
                           type='text'
                           name='name'
                           className='form-control'
                           id='name'
                           value={name}
                           placeholder='Name'
                           onChange={handleChange}
                        />
                     </div>
                     <div className='form-group col-md-6'>
                        <label htmlFor='email'>
                           Email<span className='asterik-red'>*</span>
                        </label>
                        <input
                           type='text'
                           name='email'
                           className='form-control'
                           id='email'
                           value={email}
                           placeholder='Email Address'
                           onChange={handleChange}
                        />
                     </div>
                     <div className='form-group col-md-6'>
                        <label htmlFor='website'>Website</label>
                        <input
                           type='text'
                           name='website'
                           className='form-control'
                           id='website'
                           value={website}
                           placeholder='Webstie Address(optional)'
                           onChange={handleChange}
                        />
                     </div>
                  </div>
                  <div className='card-footer'>
                     <button
                        type='submit'
                        id='create-comment'
                        className='btn btn-primary'
                     >
                        Submit
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Comments;
