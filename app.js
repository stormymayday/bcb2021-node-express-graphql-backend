// Importing Express
const express = require('express');

// Creating app object by calling Express
const app = express();

//Body-Parsing
app.use(express.json());

// Listening on port 3000
app.listen(3000);

// Server Test
app.get('/', (req, res, next) => {
    res.send('Hello World!');
})