import * as _ from 'lodash';
import { ObjectId } from 'bson';
import * as mongoose from 'mongoose';

let test:(String|Number);
const Schema = mongoose.Schema;
const SignUpSchema: mongoose<Schema> = new Schema(
  _.extend({
      firstname   : String
    , lastname   : String
    , gender  : String
    , email   : String
    , pwd     : String
    , cpwd    : String
    , number  : Number
    , dob     : test
    , address1: String
    , address2: String
    , city    : String
    , state   : String
    , country : String
    , zipcode : Number
    , date    : Date
    , active  : Boolean
  }, {
    userId: {
      type : String
      , 'default': new ObjectId()
  }
}));

export default mongoose.model('User1', SignUpSchema);
