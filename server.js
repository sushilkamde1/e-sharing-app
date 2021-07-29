const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");
// const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());

// connect database
connectDB();

//cors
// const corsOption = {
//   origin: process.env.ALLOWED_CLIENT.split(","),
//   //['localhost://3000', 'localhost://3001' ]
// };
// app.use(cors(corsOption));

// template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// connect router
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
