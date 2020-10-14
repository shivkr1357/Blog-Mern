import React from 'react';

export const showErrMsg = (msg) => (
   <div className='alert alert-danger' role='alert'>
      {msg}
   </div>
);

export const showSuccessMsg = (msg) => (
   <div className='alert alert-success' role='alert'>
      {msg}
   </div>
);

export const message = {
   titleRequired: 'Please enter title',
   tagsRequired: 'Please Enter at least one tag',
   authorRequired: 'Please Enter author name',
   htmlRequired: 'Please Enter Post Description',
};
