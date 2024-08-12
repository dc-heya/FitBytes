const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const User = require('./User'); // Import the User model/schema
const UserDiseases = new Schema({
  // userId:user_Id,
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
  username: { type: String, require: true, unique: true },
  age: { type: Number, required: false },
  gender: { type: String, required: false },
  currentweight: { type: Number, required: false },
  height: { type: Number, required: false},
  veg:{ type: String, required: false },
  goalweight:{ type: Number, required: false },
  goalmonths:{ type: Number, required: false},
  exercisefreq:{ type: String, required: false }
});

module.exports = mongoose.model('UserDiseases', UserDiseases);
