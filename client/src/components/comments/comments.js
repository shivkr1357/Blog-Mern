import React, { useState } from 'react'

/**
* @author
* @function Comments
**/

const Comments = (props) => {

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [commentData, setCommentData] = useState({
        'comment' : '',
        'name' : '',
        'email' : '',
        'website' : ''
    });

    const {comment, name , email, website} = commentData;

    const handleChange= (e) => {
        setCommentData({
            ...commentData,
            [e.target.name]: e.target.value,
            successMsg: '',
            errorMsg: '',
         });
         console.log(commentData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const {comment, name , email, website} = commentData;
        // const data = {comment, name , email, website };
        console.log('submitclicked');
    }
  return(
    <div className="comments-section">
        <div className="comment-form">
        <div className="card-header">
            <h5 className="card-title">Leave a reply</h5>
          </div>
        <form role="form" id="create-comment" onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="row">
              <div className="form-group col-md-6">
                    <label htmlFor='comment'>Comments<span className="asterik-red">*</span></label>
                        <textarea
                        className='form-control'
                        rows='4'
                        cols='12'
                        name='comment'
                        id='comment'
                        placeholder="Comment..."
                        value={comment}
                        onChange={handleChange}
                    ></textarea>
                       
                </div>
                <div className="form-group col-md-6">
                        <label htmlFor="name">Name<span className="asterik-red">*</span></label>
                        <input type="text" name ="name" className="form-control" id="name" value={name}  placeholder="Name" onChange={handleChange} />
                       
                </div>
                <div className="form-group col-md-6">
                        <label htmlFor="email">Email<span className="asterik-red">*</span></label>
                        <input type="text" name ="email" className="form-control" id="email" value={email}  placeholder="Email Address" onChange={handleChange} />
                       
                </div>
                <div className="form-group col-md-6">
                        <label htmlFor="website">Website</label>
                        <input type="text" name ="website" className="form-control" id="website" value={website} placeholder="Webstie Address(optional)" onChange={handleChange} />
                       
                </div>
                
            </div>
            <div className="card-footer">
                <button type="submit" id="create-comment" className="btn btn-primary">Submit</button>
                
            </div>
        </div>
          </form>
        </div>
    </div>
   )

 }

export default Comments;