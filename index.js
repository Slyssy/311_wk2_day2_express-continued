const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 4001;

//* middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('./public'));
//* Importing Routers
const contacts = require('./src/routers/contactRouters');
const vehicles = require('./src/routers/vehicleRouters');

app.use(contacts);
app.use(vehicles);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
