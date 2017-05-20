import * as _ from 'lodash';
import { ObjectId } from 'bson';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema: mongoose<Schema> = new Schema(
  _.extend({
      fname   : String
    , lname   : String
    , age     : Number
    , date    : Date
    , active  : Boolean
  }, {
    userId: {
      type : String
      , 'default': new ObjectId()
  }
}));

export default mongoose.model('User', UserSchema);
