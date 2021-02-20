const Workout = require('../../models/workout');

module.exports = {
    getAll
}

async function getAll(req, res) {
    // const workouts = await Workout.find({user:});
    console.log(req.body)
    return res.status(200).json();
  }
  