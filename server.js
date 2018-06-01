const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
//const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Enable cors
app.use(cors());

// API location
//app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.post('/api/irmgard', function (req, res) {
    if (req.body.counter) {
        console.log(req.body.counter);
    }
    return res.json("{'success': 'true'}");
});

app.post('/api/barbara', function (req, res) {
    if (req.body.counter) {
        console.log(req.body.counter);
    }
    return res.json("{'success': 'true'}");
});
//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));