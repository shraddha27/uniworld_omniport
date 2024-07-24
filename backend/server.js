const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const checkoutRoutes = require('./routes/checkout');
const cors = require('cors');

const app = express();
// Use CORS middleware

app.use(bodyParser.json());
app.use(cors());
app.use('/checkout', checkoutRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
