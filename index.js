const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const sequelize = require("./src/utils/connection");
const authorRoutes = require("./src/routes/authorRoutes");
const bookRoutes = require("./src/routes/bookRoutes");
const genreRoutes = require("./src/routes/genreRoutes");
const adminRoutes = require("./src/routes/adminRoutes");

const app = express();
// Configuring dotenv
dotenv.config();

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Static Files
app.use(
  "/public/profilePics",
  express.static(__dirname + "/public/profilePics")
);

// Cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// All Routes
app.use("/api/", authorRoutes, bookRoutes, genreRoutes, adminRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Hello To Gaana API");
});

// Server
const PORT = process.env.PORT;

// Syncing the database
sequelize;

// Listening to the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
