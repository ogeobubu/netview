const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv/config");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const connection_uri = process.env.DATABASE;

mongoose.connect(
  connection_uri,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      return console.log("MongoDB has failed to successfully connect!");
    } else {
      return console.log("MongoDB has successfully connected!");
    }
  }
);

const PORT = process.env.PORT || process.env.PORT_PATH;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
