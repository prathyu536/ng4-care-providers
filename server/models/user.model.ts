import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema: any = new Schema({
    id      : ObjectId
  , fname   : String
  , lname   : String
  , age     : Number
  , date    : Date
  , active  : Boolean
});

module.exports = mongoose.model('User', UserSchema);
