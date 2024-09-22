const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');

app.use(cors());
app.use(express.json());

 mongoose.connect("mongodb://localhost:27017/User", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

require('./routes/users')(app);
require('./routes/post')(app);
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
