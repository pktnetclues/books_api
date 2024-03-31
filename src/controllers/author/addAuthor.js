const { QueryTypes } = require("sequelize");

const sequelize = require("../../utils/connection");

const addAuthor = async (req, res) => {
  const { id, name, bio } = req.body;

  if (!id || !name || !bio) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Checking if the author already exists
    const getAuther = await sequelize.query(
      `SELECT * FROM author WHERE auther_id = ${id}`,
      { type: QueryTypes.SELECT }
    );

    // Checking if the author already exists
    if (getAuther.length) {
      return res.status(400).json({ message: "Auther already exists" });
    }

    // Inserting data into the author table
    await sequelize.query(
      `INSERT INTO author (auther_id, auther_name, auther_bio) VALUES (${id}, '${name}', '${bio}')`,
      { type: QueryTypes.INSERT }
    );

    return res.status(200).json({ message: "Author added successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = addAuthor;
