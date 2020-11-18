const express = require('express');
const router = express.Router();
const commentsController = require('../Controllers/comments');

router.get('/', commentsController.readAll);
router.post('/create', commentsController.create);
// router.get('/:id', postsController.readOne);

module.exports = router;
