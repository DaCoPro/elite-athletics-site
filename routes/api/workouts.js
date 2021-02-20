const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

router.get('/', workoutsCtrl.getAll);


module.exports = router;