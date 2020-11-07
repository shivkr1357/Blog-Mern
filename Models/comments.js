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
   },
   { timestamps: true }
);

const Comments = new mongoose.model('Comments', commentSchema);

module.exports = Comments;
