const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stuff = new Schema({
    _id: { type: String },
    name: { type: String },
    description: { type: String },
    picture: { type: String },
    status: {
        type: String,
        enum: ['New', 'Former']
    },
    amount: { type: String },
    condition: { type: String },
    address: { type: String },
    is_cod: { type: Boolean },
    postal_fee: { type: String },
    owner_id: { type: Schema.Types.ObjectId, ref: 'User' },
    timestamps: true
});

module.exports = mongoose.model('Stuff', Stuff);