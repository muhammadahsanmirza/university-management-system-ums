const User = require('../models/users.model');
const { isValidObjectId } = require('mongoose');

// Controller methods for handling user-related operations

const handleGetAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).send({ message: 'No users found.' });
        }
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: 'An error occurred while retrieving users.', error });
    }
}

const handleGetUser = async (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
        return res.status(400).send({ error: 'Invalid user ID format.' });
    }

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        }

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: 'Internal server error.' });
    }
}

const handlePostUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ 'message': 'user created successfully' });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).send({ message: error.message });
        }
        res.status(500).send(error);
    }
}

const handlePatch = async (req, res) => {
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).send({ error: 'Invalid user ID format.' });
    }
    // update the user with the provided data
    let updatedFields = {};
    for (const key in req.body) {
        if (key != 'id') { updatedFields[key] = req.body[key] };
    };
    const user = await User.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
    if (!user) {
        return res.status(400).send("No user with given id was found.")
    } else {
        res.status(204).send(user)
    }
}

const handlePut = async (req, res) => {
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).send({ error: 'Invalid user ID format.' });
    }

    try {
        const id = req.params.id;
        const { name, email } = req.body;

        if (!email || !name) {
            throw new Error("Please provide an email and a name.");
        }

        const user = await User.findById(id);
        if (!user) {
            return res.status(400).send({ error: 'User not found!' });
        }

        user.name = name;
        user.email = email;

        await user.save();

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error.message || 'Error updating user' });
    }
}

const handleDeleteUser = async (req, res) => {
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).send({ error: 'Invalid user ID format.' });
    }
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        }
        res.status(200).send({ message: 'User deleted successfully.' });
    } catch (error) {
        res.status(500).send({ error: error.message || 'Error Deleting User' });
    }
}

module.exports = {
    handleGetAllUsers,
    handleGetUser,
    handlePostUser,
    handlePatch,
    handlePut,
    handleDeleteUser
};