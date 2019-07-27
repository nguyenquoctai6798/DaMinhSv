const express = require('express')
const router = express.Router();

const { TimeEatRice , CheckRegisterEatRice, RegisterEatRice, CancelRegisterEatRice} = require('../controllers/EatRice')

/* get correct current time of Vietnam */


/* Have you checked your registered rice account on the date received? */
router.post('/CheckRegisterEatRice', CheckRegisterEatRice)

/* Rice registration is based on idaccount, date and time */
router.post('/RegisterEatRice', RegisterEatRice)

/* Cancel register rice is based on idaccount, date and time */
router.post('/CancelRegisterEatRice', CancelRegisterEatRice)


module.exports = router;