const express = require('express');
const router = express.Router();
const checkinCtrl = require('../../controllers/api/checkins');

router.get('/', checkinCtrl.getAll);


module.exports = router;