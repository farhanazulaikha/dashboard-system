const PersonModel = require("../models/Persons");

const getPeopleList = async(req, res) => {
    try {
        const list = await PersonModel.find().limit(10);
        return res.json(list);
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = {
    getPeopleList
}