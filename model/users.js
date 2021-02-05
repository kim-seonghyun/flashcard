const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: email,
        required: true
    },
    flashCard: [{type: Schema.Types.ObjectId, ref:'Flashcard'}]
})

module.exports = mongoose.model(userSchema,"User");