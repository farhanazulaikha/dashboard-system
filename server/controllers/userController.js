const UserModel = require('../models/Users');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const verifyUser = async(req, res, next) => {
    try {
        const token = req.cookies.token;
        const { id } = req.params;
        let foundUser

        if(!token) {
            return res.json("the token was not available")
        }
        else {
            foundUser = await UserModel.findOne({_id: id})
            jwt.verify(token, "jwt-secret-key", (err, decoded) => {
                if(err) return res.json("Token is wrong");
                next();
            })
        }

        if(foundUser) {
            return res.json({
                message: "Success",
                fullName: foundUser.fullName
            })
        }

       }
    catch(err) {
        console.log(err)
    }
}

const registerUser = async(req, res) => {

    let isAuthorized = false;

    const {fullName, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
            UserModel.create({fullName, email, password: hash})
            .then(result => {
                const token = jwt.sign({email: result.email}, "jwt-secret-key", {expiresIn: "1d"});
                res.cookie("token", token);
                res.json({
                    message: "Success",
                    id: result._id
                })}
            )
            .catch(err => console.log(err));
    })
}

const checkUserExist = async(req, res) => {

    let isAuthorized = false;

    const {email, password} = req.body;

    UserModel.findOne({email: email}).
    then(foundUser => {
        if(foundUser) {
            bcrypt.compare(password, foundUser.password, (err, response) => {
                if(response) {
                    const token = jwt.sign({email: foundUser.email}, "jwt-secret-key", {expiresIn: "1d"})
                    res.cookie("token", token);
                    res.json({
                        message: "Success",
                        id: foundUser._id
                    })
                }
                else {
                    res.json("password is incorrect")
                }
            })
        }
        else {
            res.json("No record existed")
        }
    })
}

module.exports = {
    checkUserExist,
    verifyUser,
    registerUser
}