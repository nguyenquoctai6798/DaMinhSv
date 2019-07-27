const Router = require('express').Router
const router = new Router();

const { validateRegister } = require('../validators/Register')
const { register } = require('../controllers/Register')
const { GetAllDioceses,  GetParishesByIdDiocese , GetNameDioceseByIdDiocese } = require('../controllers/DiocesesParishes')
const { GetAllProvinces, GetDistrictsByIdProvince, GetWardsByIdDistrict, GetNameAndTypeProvinceByIdProvince,GetNameAndTypeDistrictByIdDistrict, GetNameAndTypeWardByIdWard  } = require('../controllers/ProvincesDistrictsWards')
const { GetAllSchools, GetNameSchoolByIdSchool } = require('../controllers/Schools')
const { GetIdAndNameAllHouses, CountNumberHouse, CountNumberStudentsEachHouse, GetAllHouses, UpdateMarkDeleteByIdhouse} = require('../controllers/Houses')
const { UploadSingle } = require('../controllers/UploadImage')

router.post("/countnumberstudentseachhouse", CountNumberStudentsEachHouse) 

router.post("/register", register)

/* diocese parish */
router.get("/GetAllDioceses",  GetAllDioceses)

router.post("/GetAllHouses",  GetAllHouses)

router.get("/getparishesbyiddiocese/:id", GetParishesByIdDiocese)

/* province district ward */
router.get("/GetAllProvinces",  GetAllProvinces)

router.get("/getdistrictsbyidprovince/:id", GetDistrictsByIdProvince)

router.get("/getwardsbyiddistrict/:id", GetWardsByIdDistrict)

/* school */
router.get("/GetAllSchools",  GetAllSchools)

/* house */
router.get("/getidandnameallhouses",  GetIdAndNameAllHouses)

router.post("/countnumberhouse",  CountNumberHouse)

router.post("/UpdateMarkDeleteByIdhouse/:type/:id",  UpdateMarkDeleteByIdhouse)

/* avatar */
router.post("/uploadsingle", UploadSingle)

router.get("/getnameschoolbyidschool/:id", GetNameSchoolByIdSchool)

router.post("/GetNameAndTypeProvinceByIdProvince/:id", GetNameAndTypeProvinceByIdProvince)

router.post("/GetNameAndTypeDistrictByIdDistrict/:id", GetNameAndTypeDistrictByIdDistrict)

router.post("/GetNameAndTypeWardByIdWard/:id", GetNameAndTypeWardByIdWard)

router.get("/getnamediocesebyiddiocese/:id", GetNameDioceseByIdDiocese)

module.exports = router;