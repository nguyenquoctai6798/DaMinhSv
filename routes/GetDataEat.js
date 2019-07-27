const express = require('express')
const router = express.Router();

const { getDataEatRice} = require('../controllers/getDataEat');
router.post("/getDataEat",getDataEatRice);
module.exports = router;