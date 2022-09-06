const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//* Importing Controllers (Destructuring controller module exports object)
const {
  getVehicles,
  getVehicleByID,
  postNewVehicle,
} = require('../controllers/vehicleControllers.js');

//* Defining Routes
router.get('/vehicles', getVehicles);

router.get('/vehicles/:id', getVehicleByID);

router.post('/vehicles', postNewVehicle);

module.exports = router;
