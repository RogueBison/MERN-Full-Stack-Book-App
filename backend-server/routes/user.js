const express = require("express");
const userRouter = express.Router();
const requireAuth = require("../middleware/requireAuth");

const {
  createUserAccount,
  loginUserAccount,
  getBasketAmount,
  getUserBasket,
  createUserBasket,
  removeUserBasket,
  increaseQty,
  decreaseQty,
} = require("../controllers/userController");

/// AUTHENTICATION ROUTES ///

// Create an account
userRouter.post("/signup", createUserAccount);

// Login to account
userRouter.post("/login", loginUserAccount);

// Basket Routes
userRouter.get("/get-basket-number", requireAuth, getBasketAmount);
userRouter.get("/get-basket", requireAuth, getUserBasket);
userRouter.post("/create-basket", requireAuth, createUserBasket);
userRouter.delete("/remove-basket", requireAuth, removeUserBasket);
userRouter.post("/increase-qty", requireAuth, increaseQty);
userRouter.post("/decrease-qty", requireAuth, decreaseQty);

module.exports = userRouter;
