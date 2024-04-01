const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const getAuthors = async (req, res) => {
  try {
    // Fetching all the authors
    const authorResult = await sequelize.query(`SELECT * FROM author`, {
      type: QueryTypes.SELECT,
    });

    return res.status(200).json({ message: "success", authors: authorResult });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAuthors;
