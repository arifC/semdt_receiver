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
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Enable cors
app.use(cors());

// API location
//app.use('/api', api);

// Send all other requests to the Angular app
app.get('/api/irmgard/wakeup', function (req, res) {
    var fs = require('fs');
    var fileName = './src/assets/irmgard.json';
    var file = require(fileName);

    file.sleeping = false;

    fs.writeFile(fileName, JSON.stringify(file), function (err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
    });

    return res.sendStatus(200);
});

app.get('/api/irmgard/orient', function (req, res) {
    var fs = require('fs');
    var fileName = './src/assets/irmgard.json';
    var file = require(fileName);

    file.checked = true;

    fs.writeFile(fileName, JSON.stringify(file), function (err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
    });

    return res.sendStatus(200);
});

app.get('/api/rudolf/wakeup', function (req, res) {
    var fs = require('fs');
    var fileName = './src/assets/rudolf.json';
    var file = require(fileName);

    file.sleeping = false;

    fs.writeFile(fileName, JSON.stringify(file), function (err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
    });

    return res.sendStatus(200);
});

app.get('/api/rudolf/orient', function (req, res) {
    var fs = require('fs');
    var fileName = './src/assets/rudolf.json';
    var file = require(fileName);

    file.checked = true;

    fs.writeFile(fileName, JSON.stringify(file), function (err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
    });

    return res.sendStatus(200);
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));