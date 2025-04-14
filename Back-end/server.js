const mongoose = require("mongoose");
const { PORT, MONGODB_URL } = require("./config");
const express = require("express");
const app = express();

// ! DB Connect
const connectDatabase = async () => {
  const connection = await mongoose.connect(MONGODB_URL);
};
connectDatabase();

// ! Server
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`http://localhost:${PORT}`);
});
