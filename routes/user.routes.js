const { isValidObjectId } = require('mongoose');
const express = require('express');
const User = require('../models/users.model');
const router = express.Router();

const {
    handleGetAllUsers,
    handleGetUser,
    handlePostUser,
    handlePatch,
    handlePut,
    handleDeleteUser
} = require('../controllers/users.controller')

router.get('/', handleGetAllUsers );

router.get('/:id', handleGetUser);

router.post('/', handlePostUser);

router.patch('/:id', handlePatch);

router.put('/:id', handlePut);
router.delete('/:id', handleDeleteUser);


module.exports = router;