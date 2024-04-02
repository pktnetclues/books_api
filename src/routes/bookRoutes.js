const express = require("express");
const addBook = require("../controllers/books/addBook");
const deleteBook = require("../controllers/books/deleteBook");
const getBooks = require("../controllers/books/getBooks");
const updateBook = require("../controllers/books/updateBook");
const getBookByID = require("../controllers/books/getBookById");

const bookRoutes = express.Router();

// Add book
bookRoutes.post("/addBook", addBook);

// Get all books
bookRoutes.get("/getBooks", getBooks);

//Get Book By ID
bookRoutes.get("/getBookById/:book_id", getBookByID);

// Delete book
bookRoutes.delete("/deleteBook/:book_id", deleteBook);

// Update book
bookRoutes.put("/updateBook", updateBook);

module.exports = bookRoutes;
