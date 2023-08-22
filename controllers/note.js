const Note = require('../models/Note.js');
const mongoose = require('mongoose');

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();

        res.status(200).json(notes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

const createNote = async (req, res) => {

    const { title, tagline, body } = req.body;

    const newNote = new Note({ title, tagline, body })

    try {
        await newNote.save();

        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({ error });
    }

}

const deleteNote = async (req, res) => {
    try {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Note with id: ${id}`);

        await Note.findByIdAndRemove(id);

        res.json({ message: "Note deleted successfully." });
    } catch (error) {
        res.status(409).json({ error });
    }

}

const updateNote = async (req, res) => {

    const { title, tagline, body, pinned } = req.body;
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        const updatedNote = { title, tagline, body, _id: id, pinned };

        await Note.findByIdAndUpdate(id, updatedNote, { new: true });

        res.status(201).json(updatedNote);
    } catch (error) {
        res.status(409).json({ error });
    }

}

module.exports = { createNote, getNotes, deleteNote, updateNote }

