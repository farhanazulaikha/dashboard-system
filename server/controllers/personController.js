const PersonModel = require("../models/Persons");

const getPeopleList = async(req, res) => {
    try {
        const list = await PersonModel.find();
        return res.json(list);
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = {
    getPeopleList
}