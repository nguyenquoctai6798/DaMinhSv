const Router = require('express').Router
const router = new Router();

const { 
    GetAllStudents, 
    GetAccountById,
    GetAllStudentsActive, 
    GetAllStudentsNotActive, 
    GetAllStudentsByIdHouse,
    GetAllOldMembersByIdHouse,
    GetAllOldMembers,
    GetAllStudentsByIdSchool,
    GetAllStudentsByIdProvince,
    GetAllStudentsByIdDiocese,
    CountNumberStudents,
    CountNumberOldMember,
    CountNumberStudentsByMonthYearJoin,
    CountNumberStudentsEachSchoolYearAndHouse,
    CountNumberStudentsEachSchoolYear,
    CountNumberStudentsByMonthYearUnJoin,
    CountNumberStudentsByIdSchool,
    CountNumberStudentsByIdDiocese,
    CountNumberStudentsByIdProvince
} = require('../controllers/Student')

router.post("/getallstudents", GetAllStudents)

router.post("/countnumberstudents", CountNumberStudents)

router.post("/countnumberoldmember", CountNumberOldMember)

router.post("/countnumberstudentseachschoolyearandhouse", CountNumberStudentsEachSchoolYearAndHouse)

router.post("/countnumberstudentseachschoolyear", CountNumberStudentsEachSchoolYear)

router.post("/countnumberstudentsbymonthyearjoin/:monthjoin/:yearjoin", CountNumberStudentsByMonthYearJoin)

router.post("/countnumberstudentsbymonthyearunjoin/:monthunjoin/:yearunjoin", CountNumberStudentsByMonthYearUnJoin)

router.post("/getallstudentsactive", GetAllStudentsActive)

router.post("/getallstudentsnotactive", GetAllStudentsNotActive)

router.post("/GetAllStudentsByIdHouse/:id", GetAllStudentsByIdHouse)

router.post("/GetAllOldMembersByIdHouse/:id", GetAllOldMembersByIdHouse)

router.post("/GetAllOldMembers", GetAllOldMembers)

router.post("/getallstudentsbyidschool/:id", GetAllStudentsByIdSchool)

router.post("/countnumberstudentsbyidschool/:id", CountNumberStudentsByIdSchool)

router.post("/countnumberstudentsbyiddiocese/:id", CountNumberStudentsByIdDiocese)

router.post("/countnumberstudentsbyidprovince/:id", CountNumberStudentsByIdProvince)

router.post("/GetAllStudentsByIdProvince/:id", GetAllStudentsByIdProvince)

router.post("/getallstudentsbyiddiocese/:id", GetAllStudentsByIdDiocese)

router.post("/GetAccountById/:id", GetAccountById)

module.exports = router;