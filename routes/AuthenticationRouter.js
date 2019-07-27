const Router = require('express').Router
const router = new Router();
const exjwt = require('express-jwt');

const { Login, JWTMV } = require('../controllers/Login')

const jwtMW = exjwt({
    secret: 'super secret'
});

router.post('/log-in', Login )

router.get('/', jwtMW , JWTMV);

module.exports = router;