const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//* Importing Controllers (Destructuring controller module exports object)
const {
  getProducts,
  getProductByID,
  postNewProduct,
} = require('../controllers/productControllers.js');

//* Defining Routes
router.get('/products', getProducts);

router.get('/products/:id', getProductByID);

router.post('/products', postNewProduct);

module.exports = router;
