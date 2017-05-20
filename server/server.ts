import * as _ from 'lodash';
import * as express from 'express';
import * as mongoose from 'mongoose';
import {Server} from 'typescript-rest';
import CareProviderApis from './routes/routes';

const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app: express.Application = express();
const db = mongoose.connect('mongodb://127.0.0.1:27017/userslist');

// get our API routes
// const api = require('./routes/api');
const config = require('./config/env');
const User = require('./models/user.model');

let env = process.env.NODE_ENV;
env = _.isString(env) ? env.trim() : 'dev';

// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Point static path to dist
const _wd = config.env[env];
app.use(express.static(path.join(__dirname, _wd)));

// Set our api routes
// app.use('/api', api);

// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   const _currFp = config.env[env] + '/index.html';
//   res.sendFile(path.join(__dirname, _currFp));
// });

Server.buildServices(app, ...CareProviderApis);

app.listen(3000, () => {
    console.log('Rest Server listening on port 3000!');
});
