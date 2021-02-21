const Checkin = require('../../models/checkin');

module.exports = {
    getAll
}

async function getAll(req, res) {
    if (req.user.trainer) {
        const checkins = await Checkin.find({});
        return res.status(200).json(checkins);

    } else if (req.user) {
        const checkins = await Checkin.find({user:req.user._id});
        return res.status(200).json(checkins);
    }
  }
  