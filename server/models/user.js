const jwt = require("jsonwebtoken");
const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    age: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 3,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    isAdmin: Boolean,
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, name: this.name, email: this.email, age: this.age },
        config.get("jwtPrivateKey")
    );
    return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        age: Joi.string().min(1).max(3).required(),
        email: Joi.string().min(5).max(100).required().email(),
        password: Joi.string().required().min(5).max(255),
    });

    return schema.validate(user);
}

function validateNewPassword(password) {
    const schema = Joi.object({
        password: Joi.string().required().min(5).max(255),
    });

    return schema.validate(password);
}


exports.User = User;
exports.validateUser = validateUser;
exports.validateNewPassword = validateNewPassword;
