const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");
const fs = require("fs");

const deleteAdmin = async (req, res) => {
  const { id } = req.paramas;

  if (!id) {
    return res.status(400).json({ message: "Please Provide User ID" });
  }

  try {
    const getImage = await sequelize.query(
      `SELECT profilePic FROM admin WHERE id = ${id}`
    );

    console.log(getImage);
    await sequelize.query(`DELETE  FROM admin WHERE id = ${id}`, {
      type: QueryTypes.DELETE,
    });
    return res.status(200).json({ message: success });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteAdmin;
