const express = require("express");
const registerAdmin = require("../controllers/Admin/registerAdmin");
const loginAdmin = require("../controllers/Admin/loginAdmin");
const logoutAdmin = require("../controllers/Admin/logoutAdmin");

const adminRoutes = express.Router();

// Register Admin
adminRoutes.post("/register/admin", registerAdmin);

// Login Admin
adminRoutes.post("/login/admin", loginAdmin);

adminRoutes.get("/logout/admin", logoutAdmin);

adminRoutes.get;
"/profile/admin",
  (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, info) => {
      if (err) {
        res.status(401).json("Not authorized");
      }
      res.json(info);
    });
  };

module.exports = adminRoutes;
