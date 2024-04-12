const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res) => {
    const { name, email, password} = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error('Please enter all fields');
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const user = await User.create({
      name,
      email,
      password,
      pic: req.file,
    });
    if (user) {
      res.status(201).json({
        name: user.name,
        email: user.email,
        _id: user._id,
        pic: user.pic,
        token: await generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error('Failed to create user');
    }
})

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error('Please enter all fields');
    }

    const userExists = await User.findOne({ email });
    if (!userExists) {
      res.status(400);
      throw new Error("User doesn't exist,Please Login");
    }

    if (userExists && userExists.matchPassword(password, userExists.password)) {
      res.status(201).json({
        name: userExists.name,
        email: userExists.email,
        _id: userExists._id,
        pic: userExists.pic,
        token: await generateToken(userExists._id),
      });
    }
  } catch (error) {
    res.status(500);
    throw new Error('Something went wrong');
  }
};

module.exports = {
  register,
  login,
};
