// Declare dependencies and determine routes for users stored notes 
// Declare PORT you will be using process.env global variable
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// This prompts the application to start the server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));