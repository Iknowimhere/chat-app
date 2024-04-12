const { Router } = require('express');
const { login, register } = require('../controllers/userControllers');
const upload = require('../config/upload');

let userRouter = Router();

userRouter.post('/', upload.single('pic'), register);
userRouter.post('/login', login);

module.exports = userRouter;
