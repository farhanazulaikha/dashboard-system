const express = require("express");
const app = express();
const { getPeopleList, getAgeRangeCount, getEmploymentCountByYear, getPeopleByCountryCount } = require("../controllers/personController");

app.get("/people-list", getPeopleList);
app.get("/age-range-list", getAgeRangeCount);
app.get("/employment-by-year-list", getEmploymentCountByYear);
app.get("/people-by-country-list", getPeopleByCountryCount);

module.exports = app;