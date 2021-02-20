const Nutrition = require('../../models/nutrition');

module.exports = {
    getAll
}

async function getAll(req, res) {
    const nutritionPlans = await Nutrition.find({});
    return res.status(200).json(nutritionPlans);
  }
  