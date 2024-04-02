const { QueryTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sequelize = require("../../utils/connection");

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Checking if the admin already exists
    const getAdmin = await sequelize.query(
      `SELECT * FROM admin WHERE email = '${email}'`,
      { type: QueryTypes.SELECT }
    );

    // Checking if the admin exists
    if (!getAdmin.length) {
      return res.status(400).json({ message: "email does not exists" });
    }

    // Getting the hashed password from the database
    const hashedPassword = getAdmin[0].password;

    // Comparing the password
    const validPassword = await bcrypt.compare(password, hashedPassword);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    } else {
      return jwt.sign(
        {
          id: getAdmin[0].id,
          email: getAdmin[0].email,
          name: getAdmin[0].name,
        },
        process.env.JWT_SECRET,
        (err, token) => {
          if (err) {
            return res.status(500).json({ message: err.message });
          }
          return res
            .status(200)
            .cookie("token", token, {
              httpOnly: true,
              secure: false,
              sameSite: "none",
            })
            .json({ message: "success" });
        }
      );
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = loginAdmin;
