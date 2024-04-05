const { QueryTypes } = require("sequelize");
const sequelize = require("../../utils/connection");
const fs = require("fs");

const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Please Provide User ID" });
  }

  try {
    const getUser = await sequelize.query(
      `SELECT profilePic, id FROM admin WHERE id = ${id}`,
      {
        type: QueryTypes.SELECT,
      }
    );

    if (!getUser[0]?.id) {
      return res.status(400).json({ message: "User Does not Exists" });
    }

    const ImageNameFromDB = getUser[0]?.profilePic;

    if (ImageNameFromDB) {
      fs.unlink(`./public/profilePics/${ImageNameFromDB}`, (err) => {
        if (err) return err;
      });
    }

    await sequelize.query(`DELETE  FROM admin WHERE id = ${id}`, {
      type: QueryTypes.DELETE,
    });

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = deleteAdmin;
