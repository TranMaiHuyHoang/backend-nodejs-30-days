const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post('/create', userController.createUser);

router.get('/getListUsers', userController.getAllUsers);

router.get('/getUserById', userController.getUserById);

router.get('/getUserById/:id', userController.getUserById);

router.delete('/deleteUserById/:id', userController.deleteUserById);

router.put('/updateUserById/:id', userController.updateUserById);

module.exports = router;
