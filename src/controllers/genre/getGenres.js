const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");

const getGenres = async (req, res) => {
  try {
    // Fetching all the books
    const genresResult = await sequelize.query(`SELECT * FROM genre`, {
      type: QueryTypes.SELECT,
    });

    return res.status(200).json({ message: "success", books: genresResult });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getGenres;
