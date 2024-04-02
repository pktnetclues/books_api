const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const deleteBook = async (req, res) => {
  const { book_id } = req.params;

  if (!book_id) {
    return res.status(400).json({ message: "Book ID is required" });
  }

  try {
    // Checking if the book exists
    const bookExists = await sequelize.query(
      `SELECT book_id FROM books WHERE book_id = ${book_id}`,
      { type: QueryTypes.SELECT }
    );

    if (!bookExists.length) {
      return res.status(400).json({ message: "Book does not exist" });
    }

    // Deleting the book
    await sequelize.query(`DELETE FROM books WHERE book_id = ${book_id}`, {
      type: QueryTypes.DELETE,
    });

    await sequelize.query(
      `DELETE FROM book_authors WHERE book_id = ${book_id}`,
      { type: QueryTypes.DELETE }
    );

    await sequelize.query(
      `DELETE FROM book_genres WHERE book_id = ${book_id}`,
      { type: QueryTypes.DELETE }
    );

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteBook;
