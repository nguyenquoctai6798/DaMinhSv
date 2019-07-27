var models  = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const axios = require("axios");

/* function: get correct current time of Vietnam */

/* function: Have you checked your registered rice account on the date received? */
module.exports.CheckRegisterEatRice = async (req, res) => {
    const { idaccount, date} = req.body;
    await models.EatRice.findOne({
        where: {
            AccountIdaccount: idaccount,
            date: date
        }
    }).then(info =>{
        if(info !== null){      
            res.json({isExists: true, noon: info.noon, afternoon: info.afternoon})
        }
        else res.json({isExists: false}) 
    })
};

/* function: Rice registration is based on idaccount, halfaday (N, A) and date  */
module.exports.RegisterEatRice = async (req, res) => {
    const { idaccount, noon, afternoon, date,firstname} = req.body;
    if(noon === 1){
        await models.EatRice.findOne({
            where: {
                AccountIdaccount: idaccount,
                date: date,
                afternoon: 1
            }
        }).then(info =>{
            if(info !== null){  
                console.log("da dang ky chieu")
                models.EatRice.update(
                    {noon: noon},
                    {where: {
                        AccountIdaccount: idaccount,
                        date: date
                    }}
                ).then(() => {
                    console.log('update success');
                    res.json({ status: 'cancelSuccess' })
                })   
            }
            else{
                console.log("chua dang ky chieu")
                models.EatRice.create({
                    AccountIdaccount:idaccount,
                    fullname:firstname,
                    noon: 1,
                    afternoon: 0,
                    date:date,
                })
                .then(()=>{
                    console.log("Đăng ký ăn cơm thành công");
                    res.json({status: 'success'})
                })  
            }
        })
    }else if(afternoon === 1){
        await models.EatRice.findOne({
            where: {
                AccountIdaccount: idaccount,
                date: date,
                noon: 1
            }
        }).then(info =>{
            if(info !== null){  
                console.log("da dang ky trua")
                models.EatRice.update(
                    {afternoon: afternoon},
                    {where: {
                        AccountIdaccount: idaccount,
                        date: date
                    }}
                ).then(() => {
                    console.log('update success');
                    res.json({ status: 'cancelSuccess' })
                })   
            }
            else{
                console.log("chua dang ky trua")
                models.EatRice.create({
                    AccountIdaccount:idaccount,
                    fullname:firstname,
                    noon: 0,
                    afternoon: 1,
                    date:date
                })
                .then(()=>{
                    console.log("Đăng ký ăn cơm thành công");
                    res.json({status: 'success'})
                })  
            }
        })
    }
}

/* function: Cancel register rice is based on idaccount, halfaday (N, A) and date  */
module.exports.CancelRegisterEatRice = async (req, res) => {
    const { idaccount, noon, afternoon, date } = req.body;
    console.log("noon: " + noon)
    if(noon === 0){
        await models.EatRice.findOne({
            where: {
                AccountIdaccount: idaccount,
                date: date,
                afternoon: 1
            }
        }).then(info =>{
            if(info !== null){      
                models.EatRice.update(
                    {noon: noon},
                    {where: {
                        AccountIdaccount: idaccount,
                        date: date
                    }}
                ).then(() => {
                    console.log('update success');
                    res.json({ status: 'cancelSuccess' })
                })
            }
            else{
                models.EatRice.destroy({
                    where: {
                        AccountIdaccount: idaccount,
                        date: date
                    }
                }).then(() => {
                    console.log('destroy success');
                    res.json({ status: 'cancelSuccess' })
                })
            }
        })
    }else if(afternoon === 0){
        await models.EatRice.findOne({
            where: {
                AccountIdaccount: idaccount,
                date: date,
                noon: 1
            }
        }).then(info =>{
            if(info !== null){      
                models.EatRice.update(
                    {afternoon: afternoon},
                    {where: {
                        AccountIdaccount: idaccount,
                        date: date
                    }}
                ).then(() => {
                    console.log('update success');
                    res.json({ status: 'cancelSuccess' })
                })
            }
            else{
                models.EatRice.destroy({
                    where: {
                        AccountIdaccount: idaccount,
                        date: date
                    }
                }).then(() => {
                    console.log('destroy success');
                    res.json({ status: 'cancelSuccess' })
                })
            }
        })
    }
}