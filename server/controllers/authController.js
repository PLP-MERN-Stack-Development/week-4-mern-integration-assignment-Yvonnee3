const bcrpypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// signup a new user
exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const exists = await User.findOne({ email });

  if (exists) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn:'1h',
  });
} 

//login an existing user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user)  return res.status(404).json({ message: 'Invalid credentials' });
  const Match = await bcrypt.compare(password, user.password);
  if (!Match) return res.status(400).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
  });
 
}


