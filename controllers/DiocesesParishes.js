const Sequelize = require("sequelize");
const Op = Sequelize.Op;
var models  = require('../models');

module.exports.GetAllDioceses = (req, res) =>{
    return models.Diocese.findAll({
        order: Sequelize.literal('namediocese ASC'),
    }).then(dioceses =>{
        res.json(dioceses) 
    })
}

module.exports.GetNameDioceseByIdDiocese = (req, res) =>{
    let iddiocese = req.params.id
    return models.Diocese.findOne({
        where: {
            id: iddiocese
        },
        attributes: ['namediocese']
    }).then(diocese =>{
        res.json(diocese) 
    })
}

module.exports.GetParishesByIdDiocese = (req, res) => {
    let iddiocese = req.params.id
    console.log("iddiocese " + iddiocese)
    return models.Parish.findAll({
        where:{
            DioceseId: iddiocese
        },
        order: Sequelize.literal('nameparish ASC'),
        attributes:[Sequelize.literal('DISTINCT ON(nameparish) "nameparish", "id"')],
        raw: true,
    }).then(parishes=>{
        res.json(parishes)
    })
}   