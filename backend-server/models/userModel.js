const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "A username is required"],
    },
    email: {
      type: String,
      required: [true, "An email address is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "A password is required"],
    },
  },
  { timestamps: true }
);

// Static Signup Method
userSchema.statics.signup = async function (username, email, password) {
  // validation
  if (!username || !email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isAlphanumeric(username)) {
    throw Error("Only alphanumeric characters are valid in usernames");
  }

  if (!validator.isEmail(email)) {
    throw Error("This email address is invalid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is too weak");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("An account with this email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });

  return user;
};

// Static Login Method
userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("No account associated with this email could be found");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Password is invalid");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
