const data = require("../../service/db.js");

const getWithdraw = (req, res) => {
    const ownerId = req.query.ownerId;
    res.send(data.banks.filter((b) => b.owner === parseInt(ownerId) && b.type === "withdraw"));
};

module.exports = getWithdraw;