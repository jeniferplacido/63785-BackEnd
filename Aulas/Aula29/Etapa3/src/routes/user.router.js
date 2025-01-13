const express = require('express');
const {getUsers, getUserById, saveUser} = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', saveUser);

module.exports = router;