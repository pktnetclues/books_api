const { QueryTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../../utils/connection");
const emailvalidator = require("email-validator");

const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the file is uploaded
  let profilePic = null;
  if (req.file) {
    profilePic = req.file.filename;
  }

  console.log(profilePic);

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    if (!emailvalidator.validate(email)) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    // Checking if the admin already exists
    const getAuther = await sequelize.query(
      `SELECT * FROM admin WHERE email = '${email}'`,
      { type: QueryTypes.SELECT }
    );

    // Checking if the admin already exists
    if (getAuther.length) {
      return res.status(400).json({ message: "email already exists" });
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Inserting data into the admin table
    await sequelize.query(
      `INSERT INTO admin (name, email, password, profilePic) VALUES ('${name}', '${email}', '${hashedPassword}', '${profilePic}')`,
      { type: QueryTypes.INSERT }
    );

    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = registerAdmin;
