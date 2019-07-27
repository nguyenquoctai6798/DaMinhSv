const express = require('express')
const router = express.Router();

const { TimeMembers} = require('../controllers/TimeMembers');
router.post("/TimeMembers",TimeMembers);

module.exports = router;