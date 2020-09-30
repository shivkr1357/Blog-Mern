const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/posts');

router.get('/', postsController.readAll);
router.post('/create', postsController.create);

module.exports = router;
