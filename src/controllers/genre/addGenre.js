const { QueryTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

const addGenre = async (req, res) => {
  const { genre_id, genre_name } = req.body;

  if (!genre_id || !genre_name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Checking if the Genre already exists
    const getGenre = await sequelize.query(
      `SELECT * FROM genre WHERE genre_id = ${genre_id}`,
      { type: QueryTypes.SELECT }
    );

    // Checking if the Genre already exists
    if (getGenre.length) {
      return res.status(400).json({ message: "Genre already exists" });
    }

    // Inserting data into the Genre table
    await sequelize.query(
      `INSERT INTO genre (genre_id, genre_name) VALUES (${genre_id}, '${genre_name}')`,
      { type: QueryTypes.INSERT }
    );

    return res.status(200).json({ message: "Genre added successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = addGenre;
