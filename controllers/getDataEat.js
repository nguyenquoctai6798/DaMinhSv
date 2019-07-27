var models  = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const axios = require("axios");

module.exports.getDataEatRice = async (req,res)=>{
    const{date} = req.body;
    let listDontEatRiceNoon,listDontEatRiceAfternoon, listEatRiceNoon,listEatRiceAfternoon;
    let lengthDontEatRiceNoon,lengthDontEatRiceAfternoon,lengthEatRieceNoon,lengthEatRiceAfternoon;
 console.log(date);
    //list Don't eat rice noon
    await models.DontEatRice.findAll({
        where:{
            date:date,
            noon:"1"
        }
    }).then(data=>{
      listDontEatRiceNoon = data;
    })
    // list Don't eat rice afternoon
    await models.DontEatRice.findAll({
        where:{
            date:date,
            afternoon:"1"
        }
    }).then(data=>{
      listDontEatRiceAfternoon=data;
    })

    // list Eat Rice noon
    await models.EatRice.findAll({
        where:{
            date:date,
            noon:"1"
        }
    }).then(data=>{
      listEatRiceNoon=data;
    })

    // list Eat Rice Afternoon
    await models.EatRice.findAll({
        where:{
            date:date,
            afternoon:"1"
        }
    }).then(data=>{
        listEatRiceAfternoon=data;
    })
    lengthDontEatRiceNoon = listDontEatRiceNoon.length.toString();
    lengthDontEatRiceAfternoon = listDontEatRiceAfternoon.length.toString();
    lengthEatRieceNoon =  listEatRiceNoon.length.toString();
    lengthEatRiceAfternoon = listEatRiceAfternoon.length.toString();
    res.json({listEatRiceNoon: listEatRiceNoon,listEatRiceAfternoon:listEatRiceAfternoon,listDontEatRiceNoon:listDontEatRiceNoon,listDontEatRiceAfternoon:listDontEatRiceAfternoon,lengthEatRieceNoon,lengthDontEatRiceNoon,lengthEatRiceAfternoon,lengthDontEatRiceAfternoon})
}
