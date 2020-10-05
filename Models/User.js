const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: Number,
         default: 0,
      },
   },
   { timestamps: true }
);

const User = new mongoose.model('User', userSchema);

module.exports = User;
