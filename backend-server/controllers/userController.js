const User = require("../models/userModel");
const Basket = require("../models/basketModel");
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

/// Basket functions

//
const getBasketAmount = async (req, res) => {
  const { userId } = req;

  try {
    const user = await Basket.findOne({ user: userId });
    res.status(200).json(user?.basketBooks.length);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//
const getUserBasket = async (req, res) => {
  const { userId } = req;

  try {
    const cart = await Basket.findOne({ user: userId });

    if (!cart) {
      res.status(404);
      throw new Error("Basket not found");
    } else {
      res.status(200).json(cart);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//
const createUserBasket = async (req, res) => {
  const { userId } = req;
  const { id } = req.body.book;
  const cart = await Basket.findOne({ user: userId });

  if (cart) {
    const bookExists = cart.cartItems.findIndex(
      (item) => item.product.id == id
    );

    if (bookExists !== -1) {
      await Basket.findOneAndUpdate(
        { user: userId, "basketBooks.book.id": id },
        { $inc: { "basketBooks.$.quantity": 1 } },
        { new: true }
      );

      const updatedBook = await Basket.findOne({ user: userId });

      res.status(200).json({
        message: "Updated Basket",
        amount: updatedBook?.basketBooks?.length,
      });
    } else {
      const addNewBook = await cartModel.findOneAndUpdate(
        { user: userId },
        { $push: { basketBooks: { book: { ...req.body.book } } } },
        { new: true }
      );

      res.status(200).json({
        message: "Added to Basket",
        total: addNewBook?.basketBooks?.length,
      });
    }
  } else {
    const book = await Basket.create({
      user: userId,
      basketBooks: [{ book: { ...req.body.book } }],
    });
    res.status(200).json({
      message: "Added to Basket",
      total: book?.basketBooks?.length,
    });
  }
};

//
const removeUserBasket = async (req, res) => {};

//
const increaseQty = async (req, res) => {};

//
const decreaseQty = async (req, res) => {};

module.exports = {
  createUserAccount,
  loginUserAccount,
  getBasketAmount,
  getUserBasket,
  createUserBasket,
  removeUserBasket,
  increaseQty,
  decreaseQty,
};
