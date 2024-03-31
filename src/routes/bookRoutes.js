const express = require("express");
const addBook = require("../controllers/books/addBook");
const deleteBook = require("../controllers/books/deleteBook");

const bookRoutes = express.Router();

bookRoutes.post("/addBook", addBook);
bookRoutes.post("/deleteBook", deleteBook);

module.exports = bookRoutes;
