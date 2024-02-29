const PersonModel = require('../models/Persons');
const fs = require('fs');
const path = require("path");

const insertPersonToMongo = async() => {
    try {

        // read json file and insert to mongodb
        const data = fs.readFileSync(path.resolve(__dirname, "persons.json"), 'utf-8');
        const parseJSON = JSON.parse(data);
        const readJSON = parseJSON['result'];
        
        await PersonModel.insertMany(readJSON);
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = insertPersonToMongo