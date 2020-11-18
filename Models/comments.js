const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
   {
      comment: {
         type: String,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
      },
      website: {
         type: String,
         required: false,
      },
      post_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Posts',
         required: false,
      },
   },
   { timestamps: true }
);

const Comments = new mongoose.model('Comments', commentSchema);

module.exports = Comments;
