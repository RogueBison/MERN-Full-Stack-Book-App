const Book = require("../models/bookModel");
const mongoose = require("mongoose");

// get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({}).sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single book
const getSingleBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "Invalid book ID: This book record is not available" });
  }

  const book = await Book.findById(id);

  if (!book) {
    return res.status(400).json({ error: "This book record is not available" });
  }

  res.status(200).json(book);
};

// create a new book
const createBook = async (req, res) => {
  const {
    title,
    authors,
    genres,
    price,
    salePrice,
    rating,
    description,
    publication,
  } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const newData = {
      title,
      authors,
      genres,
      price,
      salePrice,
      rating,
      description,
      publication,
    };

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    // Conditionally add the path property if the file was uploaded
    else {
      newData.path = req.file.originalname;
    }

    // Create the book using the constructed bookData object
    const newBook = await Book.create(newData);
    res.status(200).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a book
const deleteBooks = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "Invalid book ID: This book record could not be deleted",
    });
  }

  const booksToDelete = await Book.deleteMany({ _id: id });

  if (!booksToDelete) {
    return res
      .status(400)
      .json({ error: "These book records could not be deleted" });
  }

  res.status(200).json(booksToDelete);
};

// update a book
const updateBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "Invalid book ID: This book record could not be updated",
    });
  }

  const updateData = { ...req.body };

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  } else {
    updateData.path = req.file.originalname;
  }

  /* const book = await Book.findOneAndUpdate({ _id: id }, { ...updateData }); */
  const book = await Book.findOneAndUpdate({ _id: id }, updateData, {
    new: true,
  });

  if (!book) {
    return res
      .status(400)
      .json({ error: "This book record could not be updated" });
  }

  res.status(200).json(book);
};

// get books for landing page categories
/* const getLandingBooks = async (req, res) => {
  try {
    const botmPromise = Book.find({ monthlyBook: true });
    const dealsPromise = Book.find({
      salePrice: { $exists: true, $ne: null },
    }).limit(4);
    const newestPromise = Book.find({}).sort({ createdAt: -1 }).limit(4);
    const highRatingPromise = Book.find({}).sort({ rating: -1 }).limit(4);

    const [results1, results2, results3, results4] = await Promise.all({
      botmPromise,
      dealsPromise,
      newestPromise,
      highRatingPromise,
    });

    const books = {
      botm: results1,
      deals: results2,
      newest: results3,
      highlyRated: results4,
    };

    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; */

const getLandingBooks = async (req, res) => {
  try {
    const botmPromise = Book.find({ monthlyBook: true });
    const dealsPromise = Book.find({
      salePrice: { $gt: 0 },
    }).limit(2);
    const newestPromise = Book.find({}).sort({ createdAt: -1 }).limit(4);
    const highRatingPromise = Book.find({}).sort({ rating: -1 }).limit(4);

    const [botm, deals, newest, highlyRated] = await Promise.all([
      botmPromise,
      dealsPromise,
      newestPromise,
      highRatingPromise,
    ]);

    await res.status(200).json({ botm, deals, newest, highlyRated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// change the "book of the month"
const changeMonthlyBook = async (req, res) => {
  const { id } = req.params;
  const { botm } = req.body.monthlyBook;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "Invalid book ID: This book record could not be updated",
    });
  }

  try {
    const monthlyBookCount = await Book.countDocuments({ monthlyBook: true });

    if (botm === true || monthlyBookCount > 1) {
      await Book.updateMany({ monthlyBook: true }, { monthlyBook: false });
    }

    const book = await Book.findOneAndUpdate(
      { _id: id },
      { monthlyBook: botm },
      { new: true }
    );

    const newMonthlyBookCount = await Book.countDocuments({
      monthlyBook: true,
    });

    if (newMonthlyBookCount === 0) {
      const defaultBook = await Book.findOne({});
      await Book.findByIdAndUpdate(defaultBook._id, { monthlyBook: true });
    }

    if (!book) {
      return res
        .status(400)
        .json({ error: "This book record could not be updated" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createBook,
  deleteBooks,
  updateBook,
  getLandingBooks,
  changeMonthlyBook,
};
