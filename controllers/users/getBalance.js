const data = require("../../service/db.js");

const getBalance = (req, res) => {
    const userId = req.query.userId;
    const response = data.users.filter((i) => i.id === parseInt(userId));

    res.send(response);
};

module.exports = getBalance;