// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('MongoDB connected');
// }).catch(err => {
//   console.error('MongoDB connection error:', err);
// });

// // User model
// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model('User', userSchema);

// // Signup route
// app.post('/api/signup', async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: 'Please fill in all fields.' });
//   }

//   // Check if user already exists
//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     return res.status(400).json({ error: 'User already exists.' });
//   }

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create a new user
//   const newUser = new User({
//     email,
//     password: hashedPassword,
//   });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'Signup successful' });
//   } catch (error) {
//     res.status(500).json({ error: 'Something went wrong.' });
//   }
// });

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: 'Please enter both email and password.' });
//   }

//   // Check if the user exists
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(400).json({ error: 'Invalid credentials' });
//   }

//   // Compare the passwords
//   const passwordMatch = await bcrypt.compare(password, user.password);
//   if (!passwordMatch) {
//     return res.status(400).json({ error: 'Invalid credentials' });
//   }

//   // Generate JWT token
//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//     expiresIn: '1h',
//   });

//   res.status(200).json({ token });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// User model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Signup route
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ error: 'User already exists.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Please enter both email and password.' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ token });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
