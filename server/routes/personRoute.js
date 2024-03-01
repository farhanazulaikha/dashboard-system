const express = require("express");
const app = express();
const { getPeopleList, getAgeRangeCount } = require("../controllers/personController");

app.get("/people-list", getPeopleList);
app.get("/age-range-list", getAgeRangeCount);

module.exports = app;