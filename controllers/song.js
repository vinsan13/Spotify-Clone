const Song = require('../models/Song.js');


const getSongs = async (req, res) => {
    try {
        const songs = await Song.find();

        res.status(200).json(songs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

const uploadSong = async (req, res) => {
    const { title, artist, songCover, songMp3 } = req.body;

    const newSong = new Song({ title, artist, songCover, songMp3 })

    try {
        await newSong.save();

        res.status(201).json(newSong);
    } catch (error) {
        res.status(409).json({ error });
    }

}

module.exports = { uploadSong, getSongs }

