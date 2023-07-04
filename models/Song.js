const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    title: String,
    artist: String,
    songCover: String,
    songMp3:String, 
})

var Song = mongoose.model('Song', songSchema);

module.exports = Song;