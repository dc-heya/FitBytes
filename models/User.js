
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, require: true, unique: true },
  weight: { type: Number, required: false },
  veg:{ type: String, required: false },
  goalweight:{ type: Number, required: false },
  goalmonths:{ type: Number, required: false},
  exercisefreq:{ type: String, required: false },
  country: { type: String, required: false },  
  email: { type: String, required: true },
  city: { type: String, required: false },
  state: { type: String, required: false },
  zipCode: { type: Number, required: false },
  age: { type: Number, required: false },
  height: { type: Number, required: false },
  gender: { type: String, required: false },
  password: { type: String, require: true },
  days: [{ type: Schema.Types.ObjectId, ref: 'Day' }],
  diseases: [{ type: String }] 

});

UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};


module.exports = mongoose.model('User', UserSchema);
