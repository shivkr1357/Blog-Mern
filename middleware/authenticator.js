const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

exports.authenticateJWT = (req, res, next) => {
   const token = req.cookies.token;

   if (!token) {
      return res.status(401).json({
         errorMessage: 'Invalid Token. UnAuthorized',
      });
   } else {
      try {
         const decoded = jwt.verify(token, jwtSecret);

         req.user = decoded.user;
         next();
      } catch (err) {
         console.log('error : ', err);
         return res.status(401).json({
            errorMessage: 'Invalid Token. UnAuthorized',
         });
      }
   }
};
