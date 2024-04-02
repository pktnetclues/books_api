const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const updateBook = async (req, res) => {
  const { book_id, title, description, published_year } = req.body;

  if (!book_id || !title || !description || !published_year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Checking if the author exists
    // const authorExists = await sequelize.query(
    //   `SELECT author_id FROM author WHERE author_name = '${author_name}'`,
    //   { type: QueryTypes.SELECT }
    // );
    // if (!authorExists.length) {
    //   return res.status(400).json({ message: "Author does not exist" });
    // }

    // // Checking if the genre exists
    // const genreExists = await sequelize.query(
    //   `SELECT genre_id FROM genre WHERE genre_name = '${genre_name}'`,
    //   { type: QueryTypes.SELECT }
    // );
    // if (!genreExists.length) {
    //   return res.status(400).json({ message: "Genre does not exist" });
    // }

    // Checking if the book exists
    const bookExists = await sequelize.query(
      `SELECT book_id FROM books WHERE book_id = ${book_id}`,
      { type: QueryTypes.SELECT }
    );

    if (!bookExists.length) {
      return res.status(400).json({ message: "Book does not exist" });
    }

    // Updating the book
    await sequelize.query(
      `UPDATE books SET title = '${title}', description = '${description}', published_year = ${published_year} WHERE book_id = ${book_id}`,
      { type: QueryTypes.UPDATE }
    );

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = updateBook;
