const express = require('express')
const router = express.Router();

const { TimeDontEatRice, CheckRegisterDontEatRice, RegisterDontEatRice, CancelRegisterDontEatRice } = require('../controllers/DontEatRice')

/* get correct current time of Vietnam */


/* Have you checked your registered don't eat rice account on the date received? */
router.post('/CheckRegisterDontEatRice', CheckRegisterDontEatRice)

/* register don't eat rice is based on idaccount, halfaday (N, A) and date */
router.post('/RegisterDontEatRice', RegisterDontEatRice)

/* cancel register don't eat rice is based on idaccount, halfaday (N, A) and date */
router.post('/CancelRegisterDontEatRice', CancelRegisterDontEatRice)

module.exports = router;