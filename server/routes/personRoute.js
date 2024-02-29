const express = require("express");
const app = express();
const { getPeopleList} = require("../controllers/personController");

app.get("/people-list", getPeopleList);

module.exports = app;