const express = require("express");
const registerAdmin = require("../controllers/Admin/registerAdmin");
const loginAdmin = require("../controllers/Admin/loginAdmin");

const adminRoutes = express.Router();

// Register Admin
adminRoutes.post("/register/admin", registerAdmin);

// Login Admin
adminRoutes.post("/login/admin", loginAdmin);

module.exports = adminRoutes;
