const _ = require("lodash");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const { User, validateUser, validateNewPassword } = require("../models/user");
const auth = require("../middleware/auth");

router.get("/:id",auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const { error } = validateUser(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }

        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send("User already registered.");

        user = new User(_.pick(req.body, ["name", "age", "email", "password"]));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();
        const token = user.generateAuthToken();

        res.header("x-auth-token", token).send(
            _.pick(user, ["_id", "name", "email", "age"])
        );
    } catch (error) {
        console.error(error);
    }
});

router.patch("/:id",auth, async (req, res) => {
    try {
        const { error } = validateNewPassword(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const newPassword = await bcrypt.hash(req.body.password, salt);
        await User.findByIdAndUpdate(req.params.id, {password: newPassword}, (error) => {
            if(error) {
                res.status(400).send(error);
                console.log(error);
            }
            else {
                res.send("Password changed successfully")
            } 
        })
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;
