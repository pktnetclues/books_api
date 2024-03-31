const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./src/utils/connection");
const authorRoutes = require("./src/routes/authorRoutes");

const bodyParser = require("body-parser");
const bookRoutes = require("./src/routes/bookRoutes");

const app = express();
// Configuring dotenv
dotenv.config();

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// All Routes
app.use("/api/", authorRoutes, bookRoutes);

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
