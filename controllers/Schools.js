var models  = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const school = require('../models/school')

module.exports.GetAllSchools = (req, res) =>{
    return  models.School.findAll({
        order: Sequelize.literal('nameschool ASC'),
    }).then(schools =>{
        res.json(schools) 
    })
}

module.exports.GetNameSchoolByIdSchool = (req, res) =>{
    let idschool = req.params.id
    return models.School.findOne({
        where: {
            id: idschool
        },
        order: Sequelize.literal('nameschool ASC'),
        attributes: ['nameschool']
    }).then(schools =>{
        res.json(schools) 
    })
}

