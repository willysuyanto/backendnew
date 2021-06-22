var express = require('express');
var router = express.Router();
var rewards = require("../controllers/reward");

/* GET users listing. */
router.get('/:id', rewards.cariSatu);

module.exports = router;
