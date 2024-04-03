const express = require("express");
const addBook = require("../controllers/books/addBook");
const deleteBook = require("../controllers/books/deleteBook");
const getBooks = require("../controllers/books/getBooks");
const updateBook = require("../controllers/books/updateBook");
const getBookByID = require("../controllers/books/getBookById");
const authMiddleware = require("../middlewares/authMiddleware");
const searchBooks = require("../controllers/books/searchBook");

const bookRoutes = express.Router();

// Add book
bookRoutes.post("/addBook", addBook);

// Get all books
bookRoutes.get("/getBooks", authMiddleware, getBooks);

//Get Book By ID
bookRoutes.get("/getBookById/:book_id", authMiddleware, getBookByID);

// Delete book
bookRoutes.delete("/deleteBook/:book_id", authMiddleware, deleteBook);

// Update book
bookRoutes.patch("/updateBook", authMiddleware, updateBook);

// Search books
bookRoutes.get("/searchBooks", authMiddleware, searchBooks);

module.exports = bookRoutes;
