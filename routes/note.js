const express = require('express');

const { createNote, getNotes, updateNote, deleteNote } = require('../controllers/note.js');

const router = express.Router();

router.get('/',getNotes)
router.post('/', createNote)
router.delete('/:id',deleteNote)
router.patch('/:id',updateNote)


module.exports =  router;