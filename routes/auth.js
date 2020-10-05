const express = require('express');
const router = express.Router();
const {
   signupValidator,
   validatorResult,
   signinValidator,
} = require('../middleware/validator');
const { signupController, signinController } = require('../Controllers/auth');

router.post('/signup', signupValidator, validatorResult, signupController);
router.post('/signin', signinValidator, validatorResult, signinController);

module.exports = router;
