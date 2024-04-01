const { QueryTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

const deleteGenre = async (req, res) => {
  const { genre_id } = req.body;

  if (!genre_id) {
    return res.status(400).json({ message: "Genre ID is required" });
  }
  try {
    // Checking if the genre already exists
    const getAuther = await sequelize.query(
      `SELECT * FROM genre WHERE genre_id = ${genre_id}`,
      { type: QueryTypes.SELECT }
    );

    if (getAuther.length === 0) {
      return res.status(400).json({ message: "Genre does not exist" });
    }

    // Checking if the genre has a book
    const checkiIfBookWithGenreExists = await sequelize.query(
      `SELECT * FROM book_genres WHERE genre_id = ${genre_id}`,
      { type: QueryTypes.SELECT }
    );

    if (checkiIfBookWithGenreExists.length) {
      return res.status(400).json({ message: "Book with genre exists" });
    }

    // Deleting author from the author table
    await sequelize.query(`DELETE FROM genre WHERE genre_id = ${genre_id}`, {
      type: QueryTypes.DELETE,
    });

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteGenre;
