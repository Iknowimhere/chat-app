const { Router } = require('express');
const { login, register } = require('../controllers/userControllers');

let userRouter = Router();

userRouter.post('/', register);
userRouter.post('/login', login);

module.exports = userRouter;
