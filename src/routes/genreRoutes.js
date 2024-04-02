const express = require("express");

// Local imports
const addGenre = require("../controllers/genre/addGenre");
const getGenres = require("../controllers/genre/getGenres");
const deleteGenre = require("../controllers/genre/deleteGenre");
const updateGenre = require("../controllers/genre/updateGenre");
const authMiddleware = require("../middlewares/authMiddleware");

const genreRoutes = express.Router();

// Add Genre
genreRoutes.post("/addGenre", authMiddleware, addGenre);

// Get all Genres
genreRoutes.get("/getGenres", authMiddleware, getGenres);

// Delete Genre
genreRoutes.delete("/deleteGenre", authMiddleware, deleteGenre);

// Update Genre
genreRoutes.put("/updateGenre", authMiddleware, updateGenre);

module.exports = genreRoutes;
