const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const getBooks = async (req, res) => {
  try {
    // Inserting data into the book table
    const booksResult = await sequelize.query(`SELECT * FROM books`, {
      type: QueryTypes.SELECT,
    });

    return res
      .status(200)
      .json({ message: "Book fetched successfully", books: booksResult });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getBooks;
