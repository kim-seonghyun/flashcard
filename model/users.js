const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocal = require("passport-local-mongoose");
const passport = require("passport");

const userSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    flashCard: [{type: Schema.Types.ObjectId, ref:'Flashcard'}]
})

userSchema.plugin(passportLocal, {
    usernameField: "email"
})

module.exports = mongoose.model('User',userSchema);