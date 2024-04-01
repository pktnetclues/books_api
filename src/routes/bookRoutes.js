const express = require("express");
const addBook = require("../controllers/books/addBook");
const deleteBook = require("../controllers/books/deleteBook");
const getBooks = require("../controllers/books/getBooks");
const updateBook = require("../controllers/books/updateBook");

const bookRoutes = express.Router();

// Add book
bookRoutes.post("/addBook", addBook);

// Get all books
bookRoutes.get("/getBooks", getBooks);

// Delete book
bookRoutes.delete("/deleteBook", deleteBook);

// Update book
bookRoutes.put("/updateBook", updateBook);

module.exports = bookRoutes;
