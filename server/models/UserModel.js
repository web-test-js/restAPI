const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    forename: {type: String, required: true},
    surname: {type: String, required: true},
    age: Number,
    email: {type: String, required: true},
    password: {type: String, required: true},
    team: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
