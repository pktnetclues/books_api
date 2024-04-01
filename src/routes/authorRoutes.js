const express = require("express");
const addAuthor = require("../controllers/author/addAuthor");
const getAuthors = require("../controllers/author/getAuthors");
const deleteAuthor = require("../controllers/author/deleteAuthor");
const updateAuthor = require("../controllers/author/updateAuthor");

const authorRoutes = express.Router();

// Add author
authorRoutes.post("/addAuthor", addAuthor);

// Get all authors
authorRoutes.get("/getAuthors", getAuthors);

// Delete author
authorRoutes.delete("/deleteAuthor", deleteAuthor);

// Update author
authorRoutes.put("/updateAuthor", updateAuthor);

module.exports = authorRoutes;
