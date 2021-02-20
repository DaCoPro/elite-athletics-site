const express = require('express');
const router = express.Router();
const trainersCtrl = require('../../controllers/api/trainers');

router.get('/', trainersCtrl.getClients);


module.exports = router;