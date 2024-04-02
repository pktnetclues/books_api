const express = require("express");
const addAuthor = require("../controllers/author/addAuthor");
const getAuthors = require("../controllers/author/getAuthors");
const deleteAuthor = require("../controllers/author/deleteAuthor");
const updateAuthor = require("../controllers/author/updateAuthor");
const authMiddleware = require("../middlewares/authMiddleware");

const authorRoutes = express.Router();

// Add author
authorRoutes.post("/addAuthor", authMiddleware, addAuthor);

// Get all authors
authorRoutes.get("/getAuthors", authMiddleware, getAuthors);

// Delete author
authorRoutes.delete("/deleteAuthor", authMiddleware, deleteAuthor);

// Update author
authorRoutes.put("/updateAuthor", authMiddleware, updateAuthor);

module.exports = authorRoutes;
