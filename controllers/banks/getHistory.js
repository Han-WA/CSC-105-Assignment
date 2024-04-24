const data = require("../../data.json");

const getHistory = (req, res) => {
    const ownerId = req.query.ownerId;
    res.send(data.banks.filter((b) => b.owner === parseInt(ownerId)));
};

module.exports = getHistory;