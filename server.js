const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');


const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db,  { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.log(err));

app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    return console.log('Server started on port: ' + port);
}); 
