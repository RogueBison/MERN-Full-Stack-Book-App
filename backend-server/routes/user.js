const express = require("express");
const userRouter = express.Router();
const requireAuth = require("../middleware/requireAuth");

const {
  createUserAccount,
  loginUserAccount,
  getBasketAmount,
  getBasket,
  addOrUpdateBasket,
  removeBasket,
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
userRouter.get("/get-basket", requireAuth, getBasket);
userRouter.post("/create-basket", requireAuth, addOrUpdateBasket);
userRouter.delete("/remove-basket", requireAuth, removeBasket);
userRouter.post("/increase-qty", requireAuth, increaseQty);
userRouter.post("/decrease-qty", requireAuth, decreaseQty);

module.exports = userRouter;
