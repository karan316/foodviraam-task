const _ = require("lodash");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { User } = require("../models/user");

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }

        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send("Invalid email and password.");

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword)
            return res.status(400).send("Invalid email or password.");

        const token = user.generateAuthToken();
        res.send(token);
    } catch (error) {
        console.error(error);
    }
    
});

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(100).required().email(),
        password: Joi.string().required().min(5).max(255),
    });

    return schema.validate(req);
}

module.exports = router;
