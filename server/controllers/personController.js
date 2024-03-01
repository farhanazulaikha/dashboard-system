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

const getAgeRangeCount = async(req, res) => {
    try {
        const ageRangeCount = await PersonModel.aggregate([
            {
                $match: {}
            },
            {
                $bucket: 
                    { 
                        groupBy: '$age',
                        boundaries: [
                            20,
                            31,
                            41,
                            51,
                            61
                        ],
                        default: "Other",
                        output: {
                            // Output for each bucket
                            "count": {
                                $sum: 1
                            },
                        }
                    }  
            }
        ]);
        return res.json(ageRangeCount)
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {
    getPeopleList,
    getAgeRangeCount
}