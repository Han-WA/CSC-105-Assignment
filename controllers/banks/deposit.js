const data = require("../../data.json");

const getDeposit = (req, res) => {
    const ownerId = req.query.ownerId;
    res.send(data.banks.filter((b) => b.owner === parseInt(ownerId) && b.type === "deposit"));
};

module.exports = getDeposit;

