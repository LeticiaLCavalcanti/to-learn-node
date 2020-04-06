const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true, select: false},
    created: { type: Date, default: Date.now}
});

UserSchema.pre('save', function(next) {

});

module.exports = mongoose.model('User', UserSchema);