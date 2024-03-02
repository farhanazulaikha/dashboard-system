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
            foundUser = await UserModel.findOne({_id: id});
            if(foundUser) {
                return res.json({
                    message: "Success",
                })
            }
            jwt.verify(token, "jwt-secret-key", (err, decoded) => {
                if(err) return res.json("Token is wrong");
                next();
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
                const token = jwt.sign({id: result._id}, "jwt-secret-key", {expiresIn: "1d"});
                res.cookie("token", token);
                res.json({
                    message: "Success",
                    id: result._id,
                    fullName: foundUser.fullName,
                    token
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
                    const token = jwt.sign({id: foundUser._id}, "jwt-secret-key", {expiresIn: "1d"})
                    res.cookie("token", token);
                    res.json({
                        message: "Success",
                        id: foundUser._id,
                        fullName: foundUser.fullName,
                        token
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