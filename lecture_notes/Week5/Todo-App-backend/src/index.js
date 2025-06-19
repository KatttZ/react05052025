require("dotenv").config();
const express = require("express");

const authRoutes = require("./routes/authRoute");

const app = express();
const PORT = 3000;

// middleware to parse JSON request body
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
