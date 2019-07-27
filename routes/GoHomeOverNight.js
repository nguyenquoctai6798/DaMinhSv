const express = require('express')
const router = express.Router();

const { GoHomeOverNight , GetAllGoHomeOverNightByIdHouse} = require('../controllers/GoHomeOverNight')

router.post('/gohomeovernight', GoHomeOverNight)

router.get('/getallgohomeovernightbyidhouse/:id', GetAllGoHomeOverNightByIdHouse) 

module.exports = router; 