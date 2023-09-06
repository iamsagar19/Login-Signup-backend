const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static('public'))
const PORT = process.env.PORT || 8082;

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/UserCredentials', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// ... (database connection code)

// Use the authentication routes
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


