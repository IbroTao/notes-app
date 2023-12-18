const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Note = mongoose.model("notes", NoteSchema);
module.exports = { Note }