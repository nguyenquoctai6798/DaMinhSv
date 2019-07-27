var models = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const axios = require("axios");

/* function: get correct current time of Vietnam */


/* function: Have you checked your registered don't eat rice account on the date received? */
module.exports.CheckRegisterDontEatRice = async (req, res)=>{
    const { idaccount, date} = req.body;
    await models.DontEatRice.findOne({
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
}

/* function: register don't eat rice is based on idaccount, halfaday (N, A) and date  */
module.exports.RegisterDontEatRice = async (req, res) => {
    const { idaccount, noon, afternoon, date,firstname} = req.body;
    if(noon === 1){
        await models.DontEatRice.findOne({
            where: {
                AccountIdaccount: idaccount,
                date: date,
                afternoon: 1
            }
        }).then(info =>{
            if(info !== null){  
                console.log("da dang ky chieu")
                models.DontEatRice.update(
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
                models.DontEatRice.create({
                    AccountIdaccount:idaccount,
                    fullname:firstname,
                    date:date,
                    noon: 1,
                    afternoon: 0
                })
                .then(()=>{
                    console.log("Đăng ký ăn cơm thành công");
                    res.json({status: 'success'})
                }).catch(err=>{
                    console.log("loi : " + err)
                })
            }
        })
    }else if(afternoon === 1){
        await models.DontEatRice.findOne({
            where: {
                AccountIdaccount: idaccount,
                date: date,
                noon: 1
            }
        }).then(info =>{
            if(info !== null){  
                console.log("da dang ky trua")
                models.DontEatRice.update(
                    {afternoon: 1},
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
                models.DontEatRice.create({
                    AccountIdaccount:idaccount,
                    fullname:firstname,
                    date:date,
                    noon: 0,
                    afternoon: 1
                })
                .then(()=>{
                    console.log("Đăng ký ăn cơm thành công");
                    res.json({status: 'success'})
                })  
            }
        })
    }
}

/* function: Cancel register don't eat rice is based on idaccount, halfaday (N, A) and date  */
module.exports.CancelRegisterDontEatRice = async (req, res) => {
    const { idaccount, noon, afternoon, date } = req.body;
    console.log("noon: " + noon)
    if(noon === 0){
        await models.DontEatRice.findOne({
            where: {
                AccountIdaccount: idaccount,
                date: date,
                afternoon: 1
            }
        }).then(info =>{
            if(info !== null){      
                models.DontEatRice.update(
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
                models.DontEatRice.destroy({
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
        await models.DontEatRice.findOne({
            where: {
                AccountIdaccount: idaccount,
                date: date,
                noon: 1
            }
        }).then(info =>{
            if(info !== null){      
                models.DontEatRice.update(
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
                models.DontEatRice.destroy({
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