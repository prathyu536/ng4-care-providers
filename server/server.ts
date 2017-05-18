// Get dependencies
import * as _ from 'lodash';
import * as express from 'express';

const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

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
let _wd = config.env[env];
app.use(express.static(path.join(__dirname, _wd)));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  let _currFp = config.env[env] + '/index.html';
  res.sendFile(path.join(__dirname, _currFp));
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
