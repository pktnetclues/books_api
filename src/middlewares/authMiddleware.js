const jwt = require("jsonwebtoken");
const { QueryTypes } = require("sequelize");

const sequelize = require("../utils/connection");

const authMiddleware = async (req, res, next) => {
  try {
    // Extract token from the request header
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: Missing token" });
    }
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user exists in the database
    const existingEmployee = await sequelize.query(
      `SELECT email FROM admin WHERE email = '${decoded.email}'`,
      { type: QueryTypes.SELECT }
    );

    if (!existingEmployee.length) {
      return res.status(401).json({ error: "Unauthorized: Invalid Token" });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Error verifying token" });
  }
};

module.exports = authMiddleware;
