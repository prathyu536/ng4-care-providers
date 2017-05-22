import * as _ from 'lodash';
import * as express from 'express';
import * as mongoose from 'mongoose';
import {Server} from 'typescript-rest';
import CareProviderApis from './routes/routes';

const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app: express.Application = express();

let env = process.env.NODE_ENV;
env = _.isString(env) ? env.trim() : 'dev';

// get our API routes
const config = require('./config/env');
const User = require('./models/user.model');
const db = mongoose.connect(config.env[env].db);

// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Point static path to dist
const _wd = config.env[env].clientPath;
app.use(express.static(path.join(__dirname, _wd)));

// Catch all other routes and return the index file
Server.buildServices(app, ...CareProviderApis);

app.listen(3000, () => {
    console.log('Rest Server listening on port 3000!');
});
