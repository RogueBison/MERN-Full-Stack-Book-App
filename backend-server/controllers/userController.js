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

/// BASKET FUNCTIONS ///

const getBasketAmount = async (req, res) => {
  const userId = req.user;

  try {
    const user = await Basket.findOne({ user: userId });
    res.status(200).json(user?.basketBooks.length);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBasket = async (req, res) => {
  const userId = req.user;

  try {
    const userBasket = await Basket.findOne({ user: userId });

    if (!userBasket) {
      res.status(404);
      throw new Error("Basket not found");
    } else {
      res.status(200).json(userBasket);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addOrUpdateBasket = async (req, res) => {
  const userId = req.user;

  const { _id, path, title, authors, price, publication, description } =
    req.body;

  try {
    const newBook = {
      _id,
      path,
      title,
      authors,
      price,
      publication,
      description,
    };

    const userBasket = await Basket.findOne({ user: userId });

    if (userBasket) {
      const bookExists = userBasket.basketBooks.findIndex(
        (b) => b.book.id == newBook._id
      );

      if (bookExists !== -1) {
        await Basket.findOneAndUpdate(
          { user: userId, "basketBooks.book.id": newBook._id },
          { $inc: { "basketBooks.$.quantity": 1 } },
          { new: true }
        );

        const updatedBook = await Basket.findOne({ user: userId });

        res.status(200).json({
          message: "Updated Basket",
          amount: updatedBook?.basketBooks?.length,
        });
      } else {
        const addNewBook = await Basket.findOneAndUpdate(
          { user: userId },
          { $push: { basketBooks: { book: { ...newBook } } } },
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
        basketBooks: [{ book: { ...newBook } }],
      });
      res.status(200).json({
        message: "Added to Basket",
        total: book?.basketBooks?.length,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeBasket = async (req, res) => {
  const userId = req.user;
  const bookId = req.body._id;

  try {
    const userBasket = await Basket.findOne({
      user: userId,
      "basketBooks.book.id": bookId,
    });

    if (userBasket) {
      const response = await Basket.findOneAndUpdate(
        {
          user: userId,
          "basketBooks.book.id": bookId,
        },
        { $pull: { basketBooks: { "book.id": bookId } } },
        { new: true }
      );

      res.status(200).json({
        message: "Removed book from basket",
        total: response?.basketBooks?.length,
      });
    } else {
      res.status(404);
      throw new Error("Book not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const increaseQty = async (req, res) => {
  const userId = req.user;
  const { bookId } = req.body._id;

  try {
    const userBasket = await Basket.findOne({
      user: userId,
      "basketBooks.book.id": bookId,
    });

    if (userBasket) {
      await Basket.findOneAndUpdate(
        { "basketBooks.book.id": bookId },
        { $inc: { "basketBooks.$.quantity": 1 } },
        { new: true }
      );

      res.status(200).json({ message: "Increased quantity +1" });
    } else {
      res.status(404);
      throw new Error("Book not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const decreaseQty = async (req, res) => {
  const userId = req.user;
  const { bookId } = req.body._id;

  try {
    const userBasket = await Basket.findOne({
      user: userId,
      "basketBooks.book.id": bookId,
    });

    if (userBasket) {
      await Basket.findOneAndUpdate(
        { "basketBooks.book.id": productId },
        { $inc: { "basketBooks.$.quantity": -1 } },
        { new: true }
      );

      res.status(200).json({ message: "Decreased quantity -1" });
    } else {
      res.status(404);
      throw new Error("Book not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUserAccount,
  loginUserAccount,
  getBasketAmount,
  getBasket,
  addOrUpdateBasket,
  removeBasket,
  increaseQty,
  decreaseQty,
};
