
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
var models  = require('../models');
const moveFile = require('move-file');
const fs = require('fs')

module.exports.GetIdAndNameAllHouses = (req, res) =>{
    return models.House.findAll({
        order: Sequelize.literal('idhouse ASC'),
        attributes: ['idhouse', 'namehouse']
    }).then(houses =>{
        res.json(houses) 
    })
}

module.exports.GetAllHouses = (req, res) =>{
    return models.House.findAll({
        order: Sequelize.literal('idhouse ASC'),
    }).then(houses =>{
        res.json(houses) 
    })
}

module.exports.GetAllHousesActive = (req, res) =>{
    return models.House.findAll({
        where:{
            markdelete: 0
        },
        order: Sequelize.literal('idhouse ASC'),
    }).then(houses =>{
        res.json(houses) 
    })
}

module.exports.GetHouseById = (req, res) =>{
    let idHouse = req.params.id
    return models.House.findOne({
        where : {
            idhouse: idHouse
        }
    }).then(house =>{
        res.json(house) 
    })
}

module.exports.CountNumberHouse = (req, res) =>{
    return models.House.findOne({
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('idhouse')), 'totalHouse']]
    }).then(count => {
        res.json(count)
    })
}

/* count number student current at each house is member, executive, comunication */
module.exports.CountNumberStudentsEachHouse = (req, res) =>{
    return models.House.findAll({
        include: [
        {
            model: models.Account,
            attributes: [],
            where: {
            typemember : 1,
            [Op.or]: [{ role: '0' }, { role: '1' }, { role: '02' }, , { role: '12' }]
            },
        }], 
        order: Sequelize.literal('idhouse ASC'),
        group: 'idhouse',
        attributes: ['idhouse','namehouse',[Sequelize.fn('COUNT', Sequelize.col('Accounts.idaccount')), 'totalStudent']]
    }).then(count => {
        res.json(count)
    }) 
} 


module.exports.AddHouse = async (req, res) =>{

    let idHouseLastest = 1
    await models.House.findOne({
        attributes: [[Sequelize.fn('MAX', Sequelize.col('idhouse')), 'idHouseLastest']],
        raw: true,
    }).then(data=>{
        if(data.idHouseLastest) {
            idHouseLastest = data.idHouseLastest + 1
        }
    })

    console.log("-------------------- " + idHouseLastest)
    let data =  {
        idhouse: idHouseLastest,
        imghouse: req.body.imghouse, 
        namehouse: req.body.namehouse, 
        address: req.body.address, 
        discriptionshouse: req.body.discriptionshouse, 
        DistrictIddistrict: req.body.DistrictIddistrict, 
        ProvinceIdprovince: req.body.ProvinceIdprovince, 
        WardIdward: req.body.WardIdward
    }

    console.log(data)

    // move file img avater from uploads/tmp to uploads/accounts
    await moveFile(`${__dirname}/../uploads/tmp/${data.imghouse}`, `${__dirname}/../uploads/houses/${data.imghouse}`)

    models.House.create(data).then(
        res.json({ success: "Tạo nhà mới thành công" })       
    )
    .catch(errors => {
        console.log("loi tao ---- " + errors)
        res.json(errors)
    })
}

module.exports.UpdateMarkDeleteByIdhouse = (req, res) =>{
    let type=req.params.type
    let idhouse = req.params.id
    models.House.update(
        {markdelete: type === 'm' ? 1: 0},
        {where:{
            idhouse: idhouse
        }}
    ).then(
        res.json("success")       
    ).catch(errors => {
        res.json(errors)
    })
}

module.exports.DeleteHouse = (req, res) =>{
    let imghouse = `${__dirname}/../uploads/houses/${req.params.imghouse}`
    let idhouse = req.params.id
    models.House.destroy(
        {where:{
            idhouse: idhouse
        }}
    ).then(()=>{
        fs.unlinkSync(imghouse)
        res.json('success')
    }    
    ).catch(errors => {
        res.json(errors)
    })
}

module.exports.UpdateHouse = async (req, res) =>{
    let idhouse = req.params.id

    let data =  {
        imghouse: req.body.imghouse, 
        isChangeImgHouse: req.body.isChangeImgHouse,
        namehouse: req.body.namehouse, 
        address: req.body.address, 
        discriptionshouse: req.body.discriptionshouse, 
        DistrictIddistrict: req.body.DistrictIddistrict, 
        ProvinceIdprovince: req.body.ProvinceIdprovince, 
        WardIdward: req.body.WardIdward
    }

    // move file img avater from uploads/tmp to uploads/accounts
    data.isChangeImgHouse ? await moveFile(`${__dirname}/../uploads/tmp/${data.imghouse}`, `${__dirname}/../uploads/houses/${data.imghouse}`) : ""

    models.House.update(
        {
            imghouse: data.imghouse,
            namehouse: data.namehouse,
            address: data.address,
            discriptionshouse: data.discriptionshouse,
            DistrictIddistrict: data.DistrictIddistrict,
            ProvinceIdprovince: data.ProvinceIdprovince,
            WardIdward: data.WardIdward
        },
        {where: {
            idhouse: idhouse
        }}
    ).then(() => {
        console.log('update success');
        res.json({ status: 'success' })
    })  
    .catch(errors => {
        console.log("update error " + errors)
        res.json(errors)
    })
}