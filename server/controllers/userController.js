const express = require("express");
const app = express();
const UserModel = require('../models/Users');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async(req, res) => {

    let isAuthorized = false;

    const {fullName, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
            UserModel.create({fullName, email, password: hash})
            .then(result => res.json("Account created"))
            .catch(err => console.log(err));
    })
}

const verifyUser = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) {
            return res.json("the token was not available")
        }
        else {
            jwt.verify(token, "jwt-secret-key", (err, decoded) => {
                if(err) return res.json("Token is wrong")
                next();
            })
        }
        return res.json("Success")
    }
    catch(err) {
        console.log(err)
    }
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
                    res.json("Success")
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