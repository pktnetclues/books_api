const express = require("express");
const addAuthor = require("../controllers/author/addAuthor");

const authorRoutes = express.Router();

authorRoutes.post("/register", addAuthor);

module.exports = authorRoutes;
