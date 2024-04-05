const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const addBook = async (req, res) => {
  const { title, description, published_year, author_name, genre_name } =
    req.body;

  if (!title || !description || !published_year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // // Checking if the author exists
    // const authorExists = await sequelize.query(
    //   `SELECT author_id FROM author WHERE author_name = '${author_name}'`,
    //   { type: QueryTypes.SELECT }
    // );

    // // Checking if the genre exists
    // const genreExists = await sequelize.query(
    //   `SELECT genre_id FROM genre WHERE genre_name = '${genre_name}'`,
    //   { type: QueryTypes.SELECT }
    // );

    // if (!authorExists.length) {
    //   return res.status(400).json({ message: "Author does not exist" });
    // }

    // if (!genreExists.length) {
    //   return res.status(400).json({ message: "Genre does not exist" });
    // }

    // Inserting data into the book table
    await sequelize.query(
      `INSERT INTO books (title, description, published_year) VALUES ('${title}', '${description}', ${published_year})`,
      { type: QueryTypes.INSERT }
    );

    const getBook = await sequelize.query(
      `SELECT book_id FROM books WHERE title = '${title}'`,
      { type: QueryTypes.SELECT }
    );

    // Inserting data into the book_authors and book_genres tables
    await sequelize.query(
      `INSERT INTO book_authors (book_id, author_id) VALUES (${book_id}, ${author_name})`,
      { type: QueryTypes.INSERT }
    );

    await sequelize.query(
      `INSERT INTO book_genres (book_id, genre_id) VALUES (${book_id}, ${genre_name})`,
      { type: QueryTypes.INSERT }
    );

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = addBook;
