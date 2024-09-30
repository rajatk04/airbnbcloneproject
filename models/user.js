const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);
//Above code line automatically implement username, hashing, salting and hash password.

module.exports = mongoose.model('User', userSchema);