const express = require("express");
const app = express();

const { checkUserExist, registerUser, verifyUser } = require("../controllers/userController");

app.get("/main/:id", verifyUser);

app.post("/sign-in", checkUserExist);

app.post("/sign-up", registerUser);

module.exports = app;