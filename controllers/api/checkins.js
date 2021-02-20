const Checkin = require('../../models/checkin');

module.exports = {
    getAll
}

async function getAll(req, res) {
    const checkins = await Checkin.find({});
    return res.status(200).json(checkins);
  }
  