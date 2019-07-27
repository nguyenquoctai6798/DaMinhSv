const Sequelize = require("sequelize");
const Op = Sequelize.Op;
var models  = require('../models');

/* get account based on id account */
module.exports.GetAccountById = (req, res) => {
    let idaccount = req.params.id
    return models.Account.findOne({
        where:{
            idaccount: idaccount
        },
        raw: true,
    }).then(account=>{
        res.json(account)
    })
}   

/* get all student current at all house is member, executive, comunication */
module.exports.GetAllStudents = (req, res) =>{
    return models.Account.findAll({
        where: {
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        }
    }).then(accounts => {
        res.json(accounts)
    })
}

/* count number student current at all house is member, executive, comunication */
module.exports.CountNumberStudents = (req, res) =>{
    return models.Account.findOne({
        where: {
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        },
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('idaccount')), 'totalStudent']]
    }).then(count => {
        res.json(count)
    })
}

/* count number old member at all house is member, executive, comunication */
module.exports.CountNumberOldMember = (req, res) =>{
    return models.Account.findOne({
        where: {
            typemember : 0,
            [Op.or]: [{ role: '0' }, { role: '1' }, {role: '2'},{ role: '02' }, , { role: '12' }]
        },
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('idaccount')), 'totalStudent']]
    }).then(count => {
        res.json(count)
    })
}


/* count number student current at all house 
* is member, executive, comunication 
* based on monthjoin and yearjoin
*/
module.exports.CountNumberStudentsByMonthYearJoin = (req, res) =>{
    let monthjoin = req.params.monthjoin
    let yearjoin = req.params.yearjoin
    return models.Account.findOne({
        where: {
            monthjoin: monthjoin,
            yearjoin: yearjoin,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        },
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('idaccount')), 'totalStudent']]
    }).then(count => {
        res.json(count)
    })
}

/* count number student at all house 
* is member, executive, comunication 
* based on monthjoin and yearjoin
*/
module.exports.CountNumberStudentsByMonthYearUnJoin = (req, res) =>{
    let monthunjoin = req.params.monthunjoin
    let yearunjoin = req.params.yearunjoin
    return models.Account.findOne({
        where: {
            monthunjoin: monthunjoin,
            yearunjoin: yearunjoin,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        },
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('idaccount')), 'totalStudent']]
    }).then(count => {
        res.json(count)
    })
}

/* count number student current at all house 
* is member, executive, comunication 
* based on yearstudent and house id
*/
module.exports.CountNumberStudentsEachSchoolYearAndHouse = (req, res) =>{
    return models.Account.findAll({
        where: {
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        },
        order: Sequelize.literal('yearstudent ASC'),
        attributes: ['yearstudent', 'HouseIdhouse', [Sequelize.fn('COUNT', Sequelize.col('yearstudent')), 'totalStudent']],
        group:  ['yearstudent', 'HouseIdhouse'],
    }).then(count => {
        res.json(count)
    })
}

/* count number student current at all house 
* is member, executive, comunication 
* based on yearstudent
*/
module.exports.CountNumberStudentsEachSchoolYear = (req, res) =>{
    return models.Account.findAll({
        where: {
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        },
        order: Sequelize.literal('yearstudent ASC'),
        attributes: ['yearstudent',[Sequelize.fn('COUNT', Sequelize.col('yearstudent')), 'totalStudent']],
        group: 'yearstudent'
    }).then(count => {
        res.json(count)
    })
}

/* get all student current at all house is member, executive, comunication active*/
module.exports.GetAllStudentsActive = (req, res) =>{
    return models.Account.findAll({
        where: {
            active: 1,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        }
    }).then(accounts => {
        res.json(accounts)
    })
}

/* get all student current at all house is member, executive, comunication but no active */
module.exports.GetAllStudentsNotActive = (req, res) =>{
    return models.Account.findAll({
        where: {
            active: 0,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        }
    }).then(accounts => {
        res.json(accounts)
    })
}

/* get list students allow by idhouse */
module.exports.GetAllStudentsByIdHouse = (req, res) => {
    let idhouse = req.params.id
    return models.Account.findAll({
        where:{
            HouseIdhouse: idhouse,
            active: 1,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        },
        
    }).then(accounts=>{
        res.json(accounts)
    })
}   

/* get list old members based on idhouse */
module.exports.GetAllOldMembersByIdHouse = (req, res) => {
    let idhouse = req.params.id
    return models.Account.findAll({
        where:{
            HouseIdhouse: idhouse,
            active: 1,
            typemember : 0
        }
    }).then(accounts=>{
        res.json(accounts)
    })
}   

/* get list old members*/
module.exports.GetAllOldMembers = (req, res) => {
    return models.Account.findAll({
        where:{
            active: 1,
            typemember : 0
        }
    }).then(accounts=>{
        res.json(accounts)
    })
} 

/* get list all students based on id school*/
module.exports.GetAllStudentsByIdSchool = (req, res) => {
    let idschool = req.params.id
    return models.Account.findAll({
        where:{
            SchoolId: idschool,
            active: 1,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        }
    }).then(accounts=>{
        res.json(accounts)
    })
}  

/*count total students based on id school*/
module.exports.CountNumberStudentsByIdSchool = (req, res) => {
    let idschool = req.params.id
    return models.Account.findOne({
        where:{
            SchoolId: idschool,
            active: 1,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        },
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('idaccount')), 'totalStudent']],
    }).then(count=>{
        res.json(count)
    })
}  

/*count total students based on id diocese*/
module.exports.CountNumberStudentsByIdDiocese = (req, res) => {
    let iddiocese = req.params.id
    return models.Account.findOne({
        where:{
            DioceseId: iddiocese,
            active: 1,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        },
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('idaccount')), 'totalStudent']],
    }).then(count=>{
        res.json(count)
    })
}  

/*count total students based on id diocese*/
module.exports.CountNumberStudentsByIdProvince = (req, res) => {
    let idprovince = req.params.id
    return models.Account.findOne({
        where:{
            ProvinceIdprovince: idprovince,
            active: 1,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        },
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('idaccount')), 'totalStudent']],
    }).then(count=>{
        res.json(count)
    })
}  


/* get list all students based on id province*/
module.exports.GetAllStudentsByIdProvince = (req, res) => {
    let idprovince = req.params.id
    return models.Account.findAll({
        where:{
            ProvinceIdprovince: idprovince,
            active: 1,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        }
    }).then(accounts=>{
        res.json(accounts)
    })
}  

/* get list all students based on id diocese*/
module.exports.GetAllStudentsByIdDiocese = (req, res) => {
    let iddiocese = req.params.id
    return models.Account.findAll({
        where:{
            DioceseId: iddiocese,
            active: 1,
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
        }
    }).then(accounts=>{
        res.json(accounts)
    })
}  