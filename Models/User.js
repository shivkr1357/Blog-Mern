const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
      },
      email: {
         required: true,
         type: String,
      },
      password: {
         required: true,
         type: String,
      },
      role: {
         required: true,
         type: Number,
         default: 0,
      },
   },
   { timestamps: true }
);

const User = mongoose.Model('User', userSchema);

exports.default = User;
