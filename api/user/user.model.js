const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  profile_picture: { type: String },
  phone: {
    type: String,
    unique: true,
    required: false
  },
  email: {
    type: String,
    unique: true,
  },
});

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  profile: [ProfileSchema],
});

UserSchema.pre('save', function (next) {
  let user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

UserSchema.statics.authenticate = function (user, password, callback) {
  User.findOne({ user: user })
    .exec((err, user) => {
      if (err) {
        return callback(err);
      } else if (!user) {
        let err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

module.exports = UserSchema;
