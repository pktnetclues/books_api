const { QueryTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

const deleteAuthor = async (req, res) => {
  const { author_id } = req.body;

  if (!author_id) {
    return res.status(400).json({ message: "Author ID is required" });
  }

  const checkIfAutherWithBooksExists = await sequelize.query(
    `SELECT * FROM book WHERE author_id = ${author_id}`,
    { type: QueryTypes.SELECT }
  );

  try {
    // Checking if the author already exists
    const getAuther = await sequelize.query(
      `SELECT * FROM author WHERE auther_id = ${id}`,
      { type: QueryTypes.SELECT }
    );

    // Checking if the author already exists
    if (getAuther.length === 0) {
      return res.status(400).json({ message: "Auther does not exist" });
    }

    // Deleting author from the author table
    await sequelize.query(`DELETE FROM author WHERE auther_id = ${author_id}`, {
      type: QueryTypes.DELETE,
    });

    return res.status(200).json({ message: "Author added successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteAuthor;
