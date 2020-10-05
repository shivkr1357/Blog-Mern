import React, { useState, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { Link, useHistory } from 'react-router-dom';
import { showErrMsg, showSuccessMsg } from '../Helpers/messages.js';
import { showLoading } from '../Helpers/loading';
import { signup } from '../../apis/auth';
import { isAuthenticated } from '../Helpers/auth';
import './index.css';

const SignUp = () => {
   let history = useHistory();
   useEffect(() => {
      if (isAuthenticated() && isAuthenticated().role === 1) {
         history.push('/admin/dashboard');
      } else if (isAuthenticated() && isAuthenticated().role === 0) {
         history.push('/user/dashboard');
      }
   }, [history]);

   // filled this for testing purpose
   const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      password2: '',
      successMsg: false,
      errorMsg: false,
      loading: false,
   });
   const {
      username,
      email,
      password,
      password2,
      successMsg,
      errorMsg,
      loading,
   } = formData;

   /***** Event Handlers ****/

   const handleChange = (evt) => {
      setFormData({
         ...formData,
         [evt.target.name]: evt.target.value,
         successMsg: '',
         errorMsg: '',
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (
         isEmpty(username) ||
         isEmpty(email) ||
         isEmpty(password) ||
         isEmpty(password2)
      ) {
         setFormData({
            ...formData,
            errorMsg: 'All fields are Required',
         });
      } else if (!isEmail(email)) {
         setFormData({
            ...formData,
            errorMsg: 'Invalid Email',
         });
      } else if (!equals(password, password2)) {
         setFormData({
            ...formData,
            errorMsg: 'Passwords do not Match',
         });
      } else {
         const { username, email, password } = formData;
         const data = { username, email, password };
         setFormData({
            ...formData,
            loading: true,
         });

         signup(data)
            .then((response) => {
               console.log('Axios signup success', response);
               setFormData({
                  username: '',
                  email: '',
                  password: '',
                  password2: '',
                  loading: false,
                  successMsg: response.data.successMessage,
               });
            })
            .catch((err) => {
               console.log('Axios post error : ', err);
               setFormData({
                  ...formData,
                  loading: false,
                  errorMsg: err.response.data.errorMessage,
               });
            });
      }
   };

   const showSignUpForm = () => (
      <form className='signup-form' onSubmit={handleSubmit}>
         {/* UserName */}
         <div className='form-group input-group'>
            <div className='input-group-prepend'>
               <span className='input-group-text'>
                  <i className='fa fa-user'></i>
               </span>
            </div>
            <input
               name='username'
               value={username}
               className='form-control'
               placeholder='Username'
               type='text'
               onChange={handleChange}
            />
         </div>
         {/* Email */}
         <div className='form-group input-group'>
            <div className='input-group-prepend'>
               <span className='input-group-text'>
                  <i className='fa fa-envelope'></i>
               </span>
            </div>
            <input
               name='email'
               value={email}
               className='form-control'
               placeholder='Email'
               type='text'
               onChange={handleChange}
            />
         </div>
         {/* Password */}
         <div className='form-group input-group'>
            <div className='input-group-prepend'>
               <span className='input-group-text'>
                  <i className='fa fa-lock'></i>
               </span>
            </div>
            <input
               name='password'
               value={password}
               className='form-control'
               placeholder='Password'
               type='password'
               onChange={handleChange}
            />
         </div>
         {/* Confirm Password */}
         <div className='form-group input-group'>
            <div className='input-group-prepend'>
               <span className='input-group-text'>
                  <i className='fa fa-lock'></i>
               </span>
            </div>
            <input
               name='password2'
               value={password2}
               className='form-control'
               placeholder='Confirm Password'
               type='password'
               onChange={handleChange}
            />
         </div>
         {/* Signup Button */}
         <div className='form-group'>
            <button type='submit' className='btn btn-primary btn-block'>
               Sign Up
            </button>
         </div>
         {/* Already have an account */}
         <p className='text-center text-white'>
            Have an account?{' '}
            <Link to='/login' className=''>
               Log In
            </Link>
         </p>
      </form>
   );

   return (
      <div className='signup-container'>
         <div className='row px-4 vh-100'>
            <div className='col-md-5 mx-auto align-self-center'>
               {successMsg && showSuccessMsg(successMsg)}
               {errorMsg && showErrMsg(errorMsg)}
               {loading && (
                  <div className='text-center pb-4'> {showLoading()}</div>
               )}
               {showSignUpForm()}
            </div>
         </div>
      </div>
   );
};

export default SignUp;
