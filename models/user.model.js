const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema({
    _id: { type: String },
    email: { type: String },
    password: { type: String },
    name: { type: String },
    address: { type: String },
    profile_picture: { type: String },
    phone: { type: String },
});
module.exports = mongoose.model('User', User);