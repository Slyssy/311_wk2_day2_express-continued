const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//* Importing Controllers (Destructuring controller module exports object)
const {
  getComments,
  getCommentByID,
  postNewComment,
} = require('../controllers/commentControllers.js');

//* Defining Routes
router.get('/comments', getComments);

router.get('/comments/:id', getCommentByID);

router.post('/comments', postNewComment);

module.exports = router;
