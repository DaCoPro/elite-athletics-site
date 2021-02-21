const { default: userEvent } = require('@testing-library/user-event');
const Nutrition = require('../../models/nutrition');

module.exports = {
    getAll
}

async function getAll(req, res) {
    if (req.user.trainer) {
        const nutritionPlans = await Nutrition.find({});
        return res.status(200).json(nutritionPlans);
    } else if (req.user) {
        const nutritionPlans = await Nutrition.find({user:req.user._id});
        return res.status(200).json(nutritionPlans);
    }
  }
  