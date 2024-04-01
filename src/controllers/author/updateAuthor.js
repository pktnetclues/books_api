const { QueryTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

const updateAuthor = async (req, res) => {
  const { id, name, bio } = req.body;

  if (!id || !name || !bio) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Checking if the author already exists
    const getAuther = await sequelize.query(
      `SELECT * FROM author WHERE author_id = ${id}`,
      { type: QueryTypes.SELECT }
    );

    // Checking if the author already exists
    if (!getAuther.length) {
      return res.status(400).json({ message: "Auther does not exists" });
    }

    // Inserting data into the author table
    await sequelize.query(
      `UPDATE author SET author_name = '${name}', author_bio = '${bio}' WHERE author_id = ${id}`,
      { type: QueryTypes.UPDATE }
    );

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = updateAuthor;
