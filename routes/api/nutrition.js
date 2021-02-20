const express = require('express');
const router = express.Router();
const nutritionCtrl = require('../../controllers/api/nutrition');

router.get('/', nutritionCtrl.getAll);


module.exports = router;