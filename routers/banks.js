const express = require("express");
const getHistory = require("../controllers/banks/getHistory.js");
const getDeposit = require("../controllers/banks/deposit.js");
const getWithdraw = require("../controllers/banks/withdraw.js");
const getTransfer = require("../controllers/banks/transfer.js");

const bankRouter = express.Router();
bankRouter.get("/all", getHistory);
bankRouter.get("/deposit", getDeposit);
bankRouter.get("/withdraw", getWithdraw);
bankRouter.get("/transfer", getTransfer);

module.exports = bankRouter;