const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
};

// Signup
const createUserAccount = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);

    const token = createToken(user._id);

    res.status(200).json({ username, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login
const loginUserAccount = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.login(email, password);

    let token = createToken(user._id);

    res.status(200).json({ username: user.username, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUserAccount,
  loginUserAccount,
};
