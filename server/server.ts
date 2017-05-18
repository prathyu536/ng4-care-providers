// Get dependencies
import * as _ from 'lodash';
import * as express from 'express';
import * as mongoose from 'mongoose';

const path = require('path');
const http = require('http');
// const mongojs = require('mongojs');
const bodyParser = require('body-parser');
// Bring Mongoose into the app
// const mongoose = require( 'mongoose' );

// Create the database connection
const db = mongoose.connect('mongodb://127.0.0.1:27017/userslist');

// Get our API routes
const api = require('./routes/api');
const config = require('./config/env');

const app = express();

let env = process.env.NODE_ENV;
env = _.isString(env) ? env.trim() : 'dev';

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
const _wd = config.env[env];
app.use(express.static(path.join(__dirname, _wd)));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  const _currFp = config.env[env] + '/index.html';
  res.sendFile(path.join(__dirname, _currFp));
});


app.post('/userslist', function (req, res) {
  console.log(req);
  db.userslist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
  console.log(req.body);
});

app.get('/userslist', function (req, res) {
  db.userslist.find(function (err, docs) {
    res.json(docs);
  });
});


mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + 'mongodb://127.0.0.1:27017/userslist');
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
