const data = require("../../service/db.js");

const getUser = (req, res) => {
    const userId = req.query.userId;
    res.send(data.users.filter((i) => i.id === parseInt(userId)));
};

module.exports = getUser;