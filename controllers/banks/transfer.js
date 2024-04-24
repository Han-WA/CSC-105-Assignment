const data = require("../../service/db.js");

const getTransfer = (req, res) => {
    const ownerId = req.query.ownerId;
    res.send(data.banks.filter((b) => b.owner === parseInt(ownerId) && b.type === "transfer"));
};

module.exports = getTransfer;