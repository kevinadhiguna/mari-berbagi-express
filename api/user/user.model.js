const mongoose = require("mongoose");
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
  },
  password: {
    type: String,
    required: true,
  },
  profile: [ProfileSchema],
});

module.exports =  UserSchema;
