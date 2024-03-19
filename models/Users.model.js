const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
            trim: true,
            minlength: 2,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: validator.isEmail,
                message: "{VALUE} is not a valid email",
            },
        },
    },{ timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
