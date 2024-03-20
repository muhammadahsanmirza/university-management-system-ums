const mongoose = require("mongoose");
const { isString, isEmail }  = require("validator");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
            trim: true,
            minlength: 2,
            maxlength: 50,
            validate: {
                validator: isString,
                message: 'Name must be a string',
            },
        },
        email: {
            type: String,
            required: [true, "Please enter an email"],
            unique: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: isEmail,
                message: "{VALUE} is not a valid email",
            },
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
