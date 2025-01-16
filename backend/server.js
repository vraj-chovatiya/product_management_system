const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', productRoutes);

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});