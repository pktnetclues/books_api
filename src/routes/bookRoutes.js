const express = require("express");
const addBook = require("../controllers/books/addBook");
const deleteBook = require("../controllers/books/deleteBook");
const getBooks = require("../controllers/books/getBooks");

const bookRoutes = express.Router();

bookRoutes.post("/addBook", addBook);

bookRoutes.get("/getBooks", getBooks);

bookRoutes.post("/deleteBook", deleteBook);

module.exports = bookRoutes;
