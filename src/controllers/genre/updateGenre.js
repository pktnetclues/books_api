const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const updateGenre = async (req, res) => {
  const { genre_name, genre_id } = req.body;

  if (!genre_name || !genre_id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Checking if the genre exists
    const genreExists = await sequelize.query(
      `SELECT genre_id FROM genre WHERE genre_id = ${genre_id}`,
      { type: QueryTypes.SELECT }
    );
    if (!genreExists.length) {
      return res.status(400).json({ message: "Genre does not exist" });
    }

    // Updating the Genre
    await sequelize.query(
      `UPDATE genre SET genre_name = '${genre_name}' WHERE genre_id = ${genre_id}`,
      { type: QueryTypes.UPDATE }
    );

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = updateGenre;
