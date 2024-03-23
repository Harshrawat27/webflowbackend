const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Define a simple schema for User
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
});

const User = mongoose.model('todos', userSchema);

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://harshrwt027:xw6lUthZT94HSB34@cluster0.zmqkfcc.mongodb.net/todos',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Endpoint to get user data
app.get('/userdata', async (req, res) => {
  try {
    const user = await User.findOne(); // Fetch the first user
    res.json(user); // Send user data as JSON
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
