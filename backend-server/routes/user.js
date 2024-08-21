const express = require("express");
const userRouter = express.Router();

const {
  createUserAccount,
  loginUserAccount,
} = require("../controllers/userController");

/// AUTHENTICATION ROUTES ///

// Create an account
userRouter.post("/signup", createUserAccount);

// Login to account
userRouter.post("/login", loginUserAccount);

module.exports = userRouter;
