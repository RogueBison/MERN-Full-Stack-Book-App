require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

const { bookPublicRouter, bookPrivateRouter } = require("./routes/books");
const userRoutes = require("./routes/user");
app.use("/uploads", express.static("uploads"));
app.use("/books", bookPublicRouter);
app.use("/admin", bookPrivateRouter);
app.use("/user", userRoutes);

const mongoose = require("mongoose");
const connection = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;
mongoose
  .connect(connection, {
    dbName: "mern_bookstore_db",
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server startup success; running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
