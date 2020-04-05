const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Profile = new Schema({
    name: { type: String },
    address: { type: String },
    profile_picture: { type: String },
    phone: { type: String },
    email: { type: String }
});

const User = new Schema({
    _id: { type: String },
    username: { type: String },
    password: { type: String },
    profile: [Profile]
});

module.exports = mongoose.model('User', User);