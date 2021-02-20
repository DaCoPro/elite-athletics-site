const User = require('../../models/user');

module.exports = {
    getClients
}

async function getClients(req, res) {
    const clients = await User.find({trainer:false});
    return res.status(200).json(clients);
  }
  