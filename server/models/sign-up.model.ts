import * as _ from 'lodash';
import { ObjectId } from 'bson';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const SignUpSchema: mongoose<Schema> = new Schema(
  _.extend({
      firstname   : String
    , middlename   : String 
    , lastname   : String
    , gender  : String
    , email   : String
    , pwd     : String
    , cpwd    : String
    , number  : Number
    , dob     : Number
    , date    : Date
    , active  : Boolean
  }, {
    userId: {
      type : String
      , 'default': new ObjectId()
  }
}));

export default mongoose.model('User1', SignUpSchema);
