const express = require('express');
const cors = require('cors');
const http = require('http');
const https = require('https');
const fs = require('fs');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// start http server
const port = process.env.PORT || 3000;
// http
//let server = http.createServer(app).listen(port);

// start https server
let sslOptions = {
   key: fs.readFileSync('./server.key'),
   cert: fs.readFileSync('./server.crt')
};

//route
const api = require('./routes/api');
app.use('/api', api)

// https 
https.createServer(sslOptions, app).listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})