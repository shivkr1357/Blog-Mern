const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpire } = require('../config/keys');

exports.signupController = async (req, res) => {
   // console.log(req.body);
   const { username, email, password } = req.body;

   try {
      const user = await User.findOne({ email: email });
      if (user) {
         return res.status(400).json({
            errorMessage: 'Email Already exists',
         });
      }

      const newUser = new User();

      newUser.username = username;
      newUser.email = email;
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);

      // console.log(newUser.password);
      await newUser.save();

      res.status(200).json({
         successMessage: 'Registration Successful , Please Login',
      });
   } catch (err) {
      console.log('Signup controller error : ', err);
      res.status(500).json({
         errorMessage: 'Internal Server Error',
      });
   }
};

exports.signinController = async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.findOne({ email: email });
      if (!user) {
         return res.status(400).json({
            errorMessage: 'Invalid Email',
         });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
         return res.status(400).json({
            errorMessage: 'Invalid Password ',
         });
      }

      const payload = {
         user: {
            _id: user._id,
         },
      };

      await jwt.sign(
         payload,
         jwtSecret,
         { expiresIn: jwtExpire },
         (err, token) => {
            if (err) {
               console.log('jwt error : ', err);
            }

            const { _id, username, email, role } = user;

            res.json({
               token,
               user: { _id, username, email, role },
            });
         }
      );
   } catch (err) {
      console.log('server error ', err);
      return res.status(500).json({
         errorMessage: 'server error',
      });
   }
};
