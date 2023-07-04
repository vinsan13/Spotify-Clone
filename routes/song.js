const express = require('express');

const { uploadSong, getSongs } = require('../controllers/song.js');

const router = express.Router();

router.get('/',getSongs)
router.post('/', uploadSong);


module.exports =  router;