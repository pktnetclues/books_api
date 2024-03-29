const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./src/utils/connection");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello To Gaana API");
});

const PORT = process.env.PORT;
sequelize;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
