const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/posts');

router.get('/', postsController.readAll);
router.post('/create', postsController.create);
router.get('/:id', postsController.readOne);
module.exports = router;
