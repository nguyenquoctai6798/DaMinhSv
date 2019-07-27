var models  = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const province = require('../models/province')
const district = require('../models/district')
const ward = require('../models/ward')

module.exports.GetAllProvinces = (req, res) =>{
    return models.Province.findAll({
        order: Sequelize.literal('nameprovince ASC'),
    }).then(provinces =>{
        res.json(provinces) 
    })
}

module.exports.GetNameAndTypeProvinceByIdProvince = (req, res) =>{
    let idprovince = req.params.id
    return models.Province.findOne({
        where: {
            idprovince: idprovince
        },
        attributes: ['nameprovince', 'typeprovince']
    }).then(province =>{
        res.json(province) 
    })
}

module.exports.GetDistrictsByIdProvince = (req, res) => {
    let idprovince = req.params.id
    return models.District.findAll({
        where:{
            ProvinceIdprovince: idprovince
        },
        order: Sequelize.literal('namedistrict ASC'),
        attributes:[Sequelize.literal('DISTINCT ON(namedistrict) "namedistrict", "iddistrict"')],
        raw: true,
    }).then(districts=>{
        res.json(districts)
    })
}

module.exports.GetNameAndTypeDistrictByIdDistrict = (req, res) =>{
    let iddistrict = req.params.id
    return models.District.findOne({
        where: {
            iddistrict: iddistrict
        },
        attributes: ['namedistrict', 'typedistrict']
    }).then(district =>{
        res.json(district) 
    })
}

module.exports.GetWardsByIdDistrict = (req, res) => {
    let iddistrict = req.params.id
    return models.Ward.findAll({
        where:{
            DistrictIddistrict: iddistrict
        },
        order: Sequelize.literal('nameward ASC'),
        attributes:[Sequelize.literal('DISTINCT ON(nameward) "nameward", "idward"')],
        raw: true,
    }).then(wards=>{
        res.json(wards)
    })
}   

module.exports.GetNameAndTypeWardByIdWard = (req, res) =>{
    let idward = req.params.id
    return models.Ward.findOne({
        where: {
            idward: idward
        },
        attributes: ['nameward', 'typeward']
    }).then(ward =>{
        res.json(ward) 
    })
}