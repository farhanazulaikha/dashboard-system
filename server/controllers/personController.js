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

const getEmploymentCountByYear = async(req, res) => {
    try {
        const employmentCount = await PersonModel.aggregate([
            {
                $match: {}
            },
            {
                $bucket: 
                    { 
                        groupBy: '$employmentDate',
                        boundaries: [
                            new Date('2019-01-01T00:00:00.000Z'),
                            new Date('2020-01-01T00:00:00.000Z'),
                            new Date('2021-01-01T00:00:00.000Z'),
                            new Date('2022-01-01T00:00:00.000Z'),
                            new Date('2023-01-01T00:00:00.000Z'),
                            new Date('2024-01-01T00:00:00.000Z'),
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
        return res.json(employmentCount)
    }
    catch(err) {
        console.log(err);
    }
}

const getPeopleByCountryCount = async(req, res) => {
    try {
        const peopleByCountry = await PersonModel.aggregate([
            {
                $match: {}
            },
            {
                $group : 
                    { _id : '$country', 
                    count : { $sum : 1 }
                    }
            },
            {
                $sort:{'_id':1}
            }
        ]);
        return res.json(peopleByCountry)
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {
    getPeopleList,
    getAgeRangeCount,
    getEmploymentCountByYear,
    getPeopleByCountryCount
}