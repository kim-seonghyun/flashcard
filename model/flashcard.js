const mongoose = require("mongoose");
const { Schema } = mongoose;

const flashcardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model(flashcardSchema,"Flashcard");