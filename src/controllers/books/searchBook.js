const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const searchBooks = async (req, res) => {
  try {
    // Get the search query from req.params
    const searchQuery = req.query.search;

    // Fetching books based on search query
    const booksResult = await sequelize.query(
      `SELECT DISTINCT b.book_id, b.title, b.description, b.published_year, bg.genre_id 
       FROM books b 
       LEFT JOIN book_genres bg ON b.book_id = bg.book_id
       WHERE b.title LIKE :searchQuery OR b.description LIKE :searchQuery`,
      {
        type: QueryTypes.SELECT,
        replacements: { searchQuery: `%${searchQuery}%` },
      }
    );

    return res.status(200).json({ message: "success", books: booksResult });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = searchBooks;
