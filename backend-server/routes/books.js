const express = require("express");
const {
  getAllBooks,
  getSingleBook,
  createBook,
  deleteBooks,
  updateBook,
  getLandingBooks,
  changeMonthlyBook,
} = require("../controllers/bookController");
const requireAuth = require("../middleware/requireAuth");
const upload = require("../middleware/fileUpload");

// 'bookRouter' is an instance of the express router.
// It's used to define the routes.
// The router will be added as a middleware and will take control of requests starting with path /document.
const bookPublicRouter = express.Router();

// GET book records for landing page categories
bookPublicRouter.get("/", getLandingBooks);

// GET all books records
bookPublicRouter.get("/all", getAllBooks);

// GET a single book record
bookPublicRouter.get("/:id", getSingleBook);

/// PRIVATE ROUTES ///
const bookPrivateRouter = express.Router();

// Require authorisation for all book routes
bookPrivateRouter.use(requireAuth);

// POST a new book record
bookPrivateRouter.post("/create", upload.single("book_cover"), createBook);

// DELETE a single book record
bookPrivateRouter.delete("/delete/:id", deleteBooks);

// PATCH a book record
bookPrivateRouter.put("/update/:id", upload.single("book_cover"), updateBook);

// PATCH the "book of the month" record
bookPrivateRouter.put("/botm/:id", changeMonthlyBook);

module.exports = { bookPublicRouter, bookPrivateRouter };
