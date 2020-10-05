import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { showErrMsg } from '../Helpers/messages.js';
import { showLoading } from '../Helpers/loading';
import { setAuthentication, isAuthenticated } from '../Helpers/auth';
import { signin } from '../../apis/auth';

/**
 * @author Shivshankar
 * @function Signin
 **/

const Signin = (props) => {
   let history = useHistory();

   useEffect(() => {
      if (isAuthenticated() && isAuthenticated().role === 1) {
         history.push('/admin/dashboard');
      } else if (isAuthenticated() && isAuthenticated().role === 0) {
         history.push('/user/dashboard');
      }
   }, [history]);

   const [formData, setFormData] = useState({
      email: 'kumar@gmail.com',
      password: '1234567',
      errorMsg: false,
      loading: false,
   });

   const { email, password, errorMsg, loading } = formData;

   const handleChange = (evt) => {
      setFormData({
         ...formData,
         [evt.target.name]: evt.target.value,
         errorMsg: '',
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isEmpty(email) || isEmpty(password)) {
         setFormData({
            ...formData,
            errorMsg: 'All fields are Required',
         });
      } else if (!isEmail(email)) {
         setFormData({
            ...formData,
            errorMsg: 'Invalid Email',
         });
      } else {
         const { email, password } = formData;
         const data = { email, password };
         setFormData({
            ...formData,
            loading: true,
         });

         signin(data)
            .then((response) => {
               setAuthentication(response.data.token, response.data.user);
               if (isAuthenticated() && isAuthenticated().role === 1) {
                  // console.log("Redirect to admin dashboard");
                  history.push('/admin/dashboard');
               } else {
                  // console.log("Redirect to user dashboard");
                  history.push('/user/dashboard');
               }
            })
            .catch((err) => {
               console.log('error : ', err);
               setFormData({
                  ...formData,
                  loading: false,
                  errorMsg: err.response.data.errorMessage,
               });
            });
      }
   };
   const showSignInForm = () => (
      <form className='signup-form' onSubmit={handleSubmit}>
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
         {/* Signup Button */}
         <div className='form-group'>
            <button type='submit' className='btn btn-primary btn-block'>
               Sign In
            </button>
         </div>
         {/* Already have an account */}
         <p className='text-center text-white'>
            Don't have an account?{' '}
            <Link to='/signup' className=''>
               Register
            </Link>
         </p>
      </form>
   );
   return (
      <div className='signin-container'>
         <div className='row px-4 vh-100'>
            <div className='col-md-5 mx-auto align-self-center'>
               {errorMsg && showErrMsg(errorMsg)}
               {loading && (
                  <div className='text-center pb-4'> {showLoading()}</div>
               )}
               {showSignInForm()}
            </div>
         </div>
      </div>
   );
};

export default Signin;
