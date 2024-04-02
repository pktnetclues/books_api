const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const getBookByID = async (req, res) => {
  const { book_id } = req.params;
  try {
    // Fetching book by ID
    const booksResult = await sequelize.query(
      `SELECT b.book_id, b.title, b.description, b.published_year, bg.genre_id FROM books b LEFT JOIN book_genres bg ON b.book_id = bg.book_id WHERE b.book_id = ${book_id}`,
      {
        type: QueryTypes.SELECT,
      }
    );

    return res.status(200).json({ message: "success", books: booksResult });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getBookByID;
