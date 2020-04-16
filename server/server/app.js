const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB database connection established successfully..."));

app.use('/api/user', require('../controllers/UserControl'));

app.listen(port, () => console.log(`Server has been stared on port: ${port}...`));