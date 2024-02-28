const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const connectToMongo = require("./database/connection");
const cookieParser = require("cookie-parser");

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
  }));
  app.use(express.json());

app.use(cookieParser());

connectToMongo().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
})