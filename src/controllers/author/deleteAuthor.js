const { QueryTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

const deleteAuthor = async (req, res) => {
  const { author_id } = req.body;

  if (!author_id) {
    return res.status(400).json({ message: "Author ID is required" });
  }
  try {
    // Checking if the author already exists
    const getAuther = await sequelize.query(
      `SELECT * FROM author WHERE author_id = ${id}`,
      { type: QueryTypes.SELECT }
    );

    if (getAuther.length === 0) {
      return res.status(400).json({ message: "Author does not exist" });
    }

    // Checking if the book has an author
    const checkiIfBookWithAuthorExists = await sequelize.query(
      `SELECT * FROM book_authors WHERE author_id = ${author_id}`,
      { type: QueryTypes.SELECT }
    );

    if (checkiIfBookWithAuthorExists.length) {
      return res.status(400).json({ message: "Book with author exists" });
    }

    // Deleting author from the author table
    await sequelize.query(`DELETE FROM author WHERE auther_id = ${author_id}`, {
      type: QueryTypes.DELETE,
    });

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteAuthor;
