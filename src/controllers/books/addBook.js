const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const addBook = async (req, res) => {
  const { book_id, title, description, published_year } = req.body;

  if (!book_id || !title || !description || !published_year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Checking if the author exists
    const authorExists = await sequelize.query(
      `SELECT * FROM author WHERE author_id = ${author_id}`,
      { type: QueryTypes.SELECT }
    );

    // Checking if the genre exists
    const genreExists = await sequelize.query(
      `SELECT * FROM genre WHERE genre_id = ${genre_id}`,
      { type: QueryTypes.SELECT }
    );

    if (!authorExists.length) {
      return res.status(400).json({ message: "Author does not exist" });
    }

    if (!genreExists.length) {
      return res.status(400).json({ message: "Genre does not exist" });
    }

    // Inserting data into the book table
    await sequelize.query(
      `INSERT INTO books (book_id, title, description, published_year) VALUES (${book_id}, '${title}', '${description}', ${published_year})`,
      { type: QueryTypes.INSERT }
    );

    return res.status(200).json({ message: "Book added successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = addBook;
