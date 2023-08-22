const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const cors = require("cors")
const dotenv = require("dotenv");
const app = express();
const Note = require('./routes/note.js');

dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/note', Note);

const server = http.createServer(app);

const PORT = process.env.PORT || 5000


app.get('/', (req, res) => {
  res.send('Server is UP')
})


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


