const express = require('express')
const router = express.Router();

const { AddHouse, DeleteHouse, GetHouseById, UpdateHouse, GetAllHousesActive, GetIdAndNameAllHouses} = require('../controllers/Houses')

/* get all info house if house active */
router.post('/GetAllHousesActive', GetAllHousesActive)
router.post("/GetIdAndNameAllHouses",  GetIdAndNameAllHouses)

/* add new house */
router.post('/AddHouse', AddHouse)

/* delete house */
router.post('/DeleteHouse/:id/:imghouse', DeleteHouse)

/* get info house by id house */
router.post('/GetHouseById/:id', GetHouseById)

/* update info house by id house */
router.post('/UpdateHouse/:id', UpdateHouse)

module.exports = router;