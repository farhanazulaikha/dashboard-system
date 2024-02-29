const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: Object,
    age: Number,
    username: String,
    email: String,
    country: String,
    website: String,
    jobTitle: String,
    employmentDate: Date,
})

const PersonModel = mongoose.model("persons", PersonSchema);
module.exports = PersonModel;