const express = require("express");
const registerAdmin = require("../controllers/Admin/registerAdmin");
const loginAdmin = require("../controllers/Admin/loginAdmin");
const logoutAdmin = require("../controllers/Admin/logoutAdmin");
const fileHandleMiddleware = require("../middlewares/fileHandleMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const deleteAdmin = require("../controllers/Admin/DeleteAdmin");

const adminRoutes = express.Router();

// Register Admin
adminRoutes.post(
  "/register/admin",
  fileHandleMiddleware.single("profilePic"),
  registerAdmin
);

// Login Admin
adminRoutes.post("/login/admin", loginAdmin);

adminRoutes.get("/logout/admin", logoutAdmin);

adminRoutes.delete("/delete/admin/:id", deleteAdmin);

adminRoutes.get("/profile/admin", authMiddleware, (req, res) => {
  res.status(200).json({ message: "success", user: req.admin });
});

module.exports = adminRoutes;
