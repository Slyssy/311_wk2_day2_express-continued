const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//* Importing Controllers (Destructuring controller module exports object)
const {
  getContacts,
  getContactByID,
  postNewContact,
} = require('../controllers/contactControllers.js');

//* Defining Routes
router.get('/contacts', getContacts);

router.get('/contacts/:id', getContactByID);

router.post('/contacts', postNewContact);

module.exports = router;
