const express = require("express");
const app = express();
const { getPeopleList, getAgeRangeCount, getEmploymentCountByYear } = require("../controllers/personController");

app.get("/people-list", getPeopleList);
app.get("/age-range-list", getAgeRangeCount);
app.get("/employment-by-year-list", getEmploymentCountByYear);

module.exports = app;