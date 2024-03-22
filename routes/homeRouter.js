const express = require('express');
const router = express.Router();
const labelController = require('../controllers/labelController');
const homeController = require('../controllers/homeController');

router.post('/label', labelController.post);
router.get('/label', labelController.get);
router.get('/', homeController.get);

module.exports = router;