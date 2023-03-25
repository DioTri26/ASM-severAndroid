const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        tyne: String,
    },
    avata:{
        tyne: String,
    },
    email: {
        tyne: String,
    },
    password: {
        tyne: String,
    }
});

let User = mongoose.model('User', userSchema);

module.exports = {User};