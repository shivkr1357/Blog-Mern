import React, { useState } from 'react';
import { createPost } from '../../../apis/posts';
import isEmpty from 'validator/lib/isEmpty';
import { showLoading } from '../../Helpers/loading';
import { showSuccessMsg, showErrMsg, message } from '../../Helpers/messages';

/**
 * @author
 * @function AdminDashboard
 **/

const AdminDashboard = (props) => {
   const [errorMsg, setErrorMsg] = useState('');
   const [successMsg, setSuccessMsg] = useState('');
   const [loading, setLoading] = useState(false);
   const [postData, setPostData] = useState({
      title: '',
      tags: '',
      author: '',
      html: '',
   });

   const { title, tags, author, html } = postData;
   const handleChange = (e) => {
      setPostData({
         ...postData,
         [e.target.name]: e.target.value,
         successMsg: '',
         errorMsg: '',
      });
      console.log(postData);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Submit clicled');
      setLoading(true);
      if (isEmpty(title)) {
         setErrorMsg(message.titleRequired);
      } else if (isEmpty(tags)) {
         setErrorMsg(message.tagsRequired);
      } else if (isEmpty(author)) {
         setErrorMsg(message.authorRequired);
      } else if (isEmpty(html)) {
         setErrorMsg(message.htmlRequired);
      } else {
         const { title, tags, author, html } = postData;
         const data = { title, tags, author, html };
         console.log(data);
         setPostData({
            ...postData,
            loading: true,
         });
         createPost(data)
            .then((res) => {
               setLoading(false);
               setPostData({
                  ...postData,
                  title: '',
                  tags: '',
                  author: '',
                  html: '',
               });
               setErrorMsg('');
               setSuccessMsg(res.data.successMessage);
            })
            .catch((err) => {
               setLoading(false);
               setErrorMsg(err.response.data.errorMessage);
               console.log('Post create error', err);
            });
      }
   };

   const showPostForm = () => (
      <form onSubmit={handleSubmit}>
         <div className='com-md-6 form-group p-2'>
            <label htmlFor='post-title'>Title </label>
            <input
               type='text'
               className='form-control'
               name='title'
               id='title'
               value={title}
               onChange={handleChange}
            />
         </div>
         <div className='com-md-6 form-group p-2'>
            <label htmlFor='post-tag'>Tags</label>
            <input
               type='text'
               className='form-control'
               name='tags'
               value={tags}
               id='tags'
               onChange={handleChange}
            />
         </div>
         <div className='com-md-6 form-group p-2'>
            <label htmlFor='post-author'>Author</label>
            <input
               type='text'
               className='form-control'
               name='author'
               id='author'
               value={author}
               onChange={handleChange}
            />
         </div>
         <div className='com-md-6 form-group p-2'>
            <label htmlFor='post-description'>Post Description</label>
            <textarea
               className='form-control'
               rows='4'
               cols='12'
               name='html'
               id='html'
               value={html}
               onChange={handleChange}
            ></textarea>
         </div>
         <div className='col-md-6 form-group'></div>

         <button
            type='submit'
            name='submit'
            id='submit'
            onClick={handleSubmit}
            className='btn btn-primary text-center'
         >
            Submit
         </button>
      </form>
   );
   return (
      <section>
         <div className='container'>
            <div className='row'>
               <div className='col-md-3'></div>
               <div className='col-md-9'>
                  <div className='text-center'>
                     {loading && (
                        <div className='text-center pb-4'> {showLoading()}</div>
                     )}
                  </div>
                  {errorMsg && showErrMsg(errorMsg)}
                  {successMsg && showSuccessMsg(successMsg)}
                  {showPostForm()}
               </div>
            </div>
         </div>
      </section>
   );
};

export default AdminDashboard;
