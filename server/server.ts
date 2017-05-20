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
const api = require('./routes/api');
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
app.use('/api', api);
// Server.setFileDest('/userslist');

// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   const _currFp = config.env[env] + '/index.html';
//   res.sendFile(path.join(__dirname, _currFp));
// });


// @Path('/userslist')
// class UserService {

//   @POST
//   saveUser(
//       @ContextRequest req: express.Request,
//       @ContextResponse res: express.Response): Return.NewResource<any> {

//     const body: any = req.body.data;
//     const user = new User({
//           fname: body.fname
//         , lname: body.lname
//         , age: body.age
//         , active: body.active || true
//         , date: new Date()
//     });

//     return user.save(function (err, post, next) {
//         if (err) { return next(err); }
//         return new Return.NewResource<any>(null, {
//             data: post._doc
//         });
//     });
//   }

//   @GET
//   @Path(':name')
//   sayHello( @PathParam('name') name: string): string {
//     return `Hello ${name}`;
//   }
// }
Server.buildServices(app, ...CareProviderApis);

app.listen(3000, () => {
    console.log('Rest Server listening on port 3000!');
});
