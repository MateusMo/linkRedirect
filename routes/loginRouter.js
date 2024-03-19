const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/',loginController.post);
router.get('/',loginController.get);

module.exports = router;