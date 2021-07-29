require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  // connection for database
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;

  connection
    .once("open", () => {
      console.log("Database connected.");
    })
    .catch((err) => {
      console.log("Connection failed");
    });
}
module.exports = connectDB;
