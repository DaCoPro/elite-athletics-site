const Workout = require('../../models/workout');

module.exports = {
    getAll
}

async function getAll(req, res) {
    if(req.user.trainer) {
        const workouts = await Workout.find({});
        return res.status(200).json(workouts);
    } else if (req.user) {
        const workouts = await Workout.find({user:req.user._id})
        return res.status(200).json(workouts)
    }
}  