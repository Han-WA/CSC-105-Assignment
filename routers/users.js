const express = require("express");
const getUser = require("../controllers/users/getUser.js");
const getBalance = require("../controllers/users/getBalance.js");
const userRouter = express.Router();
userRouter.get("/", getUser);
userRouter.get("/balance", getBalance);

module.exports = userRouter;