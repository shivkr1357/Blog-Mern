const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
      },
      tags: {
         type: String,
         required: true,
      },
      html: {
         type: String,
         required: true,
      },
      author: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

const Posts = new mongoose.model('Posts', postSchema);

module.exports = Posts;
