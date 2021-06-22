var express = require('express');
var router = express.Router();
var rewards = require("../controllers/reward");

router.post('/', rewards.buatBaru);

router.get('/', rewards.cariSemua);

router.get('/:id', rewards.cariSatu);

router.put('/:id', rewards.update);

router.delete('/:id', rewards.hapusSatu);

router.delete('/', rewards.hapusSemua);


module.exports = router;
