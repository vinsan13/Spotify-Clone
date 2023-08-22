const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title: String,
    tagline: String,
    body: String,
    pinned: {
        type: Boolean,
        default: false
    }
})

var Note = mongoose.model('Note', noteSchema);

module.exports = Note;