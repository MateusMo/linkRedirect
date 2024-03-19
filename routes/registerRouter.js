const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController.js')

router.post('/',registerController.post);
router.get('/',registerController.get)

module.exports = router;