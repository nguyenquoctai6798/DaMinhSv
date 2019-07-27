const nodemailer = require('nodemailer');
const models = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports.GoHomeOverNight = (req, res) => {

    // nhận dữ liệu từ client
    const { idaccount, fullname, goHomeOrOvernight, email, dateGoHome, timeGoHome, dateComeBack, timeComeBack, content } = req.body;

    //gửi mail

    var transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"taiphotographer6798@gmail.com",
            pass:"nguyen_tai_6" // password
        }
    });

    var mailOption = {
        from: `"${email} "<taiphotographer6798@gmail.com>`,
        replyTo: email,
        to:"hauphubinh013027@gmail.com", // email admin,
        cc: "1660171.16ck1@gmail.com",
        subject:`[${idaccount}]_[${fullname}]_XIN PHÉP ${goHomeOrOvernight ? "VỀ QUÊ":"QUA ĐÊM"}`,
        html:`<div><h4 style="color:red">Thời gian về : ${dateGoHome} lúc: ${timeGoHome} <br/>Thời gian lên : ${dateComeBack} lúc: ${timeComeBack} </h4> <hr/>  ${content}</div>`
    }

    console.log(dateGoHome)

    let data = {
        AccountIdaccount: idaccount,
        timeout: timeGoHome,
        timein:timeComeBack,
        dateout:dateGoHome,
        datein:dateComeBack,
        typeregister: goHomeOrOvernight ? 0 : 1,
        content:content
    }

    console.log(data)

    transporter.sendMail(mailOption, (err, info) => {
        if (err) {
            return console.log(err);
        }else{
            models.RegisterGoHomeOverNight.findOne({
                where: {
                    AccountIdaccount: data.AccountIdaccount,
                    dateout: data.dateout
                }
            }).then(check => {
                if(check === null){
                    models.RegisterGoHomeOverNight.create(data)
                    res.send("success")
                }else{
                    res.send("exists")
                }
                
            }).catch(err=>{
                res.send("error")
            })
            
        }
    });
}

module.exports.GetAllGoHomeOverNightByIdHouse = (req, res) => {
    let month = new Date().getMonth() + 1
    month = month < 10 ? "0" + month : month
    let year = new Date().getFullYear()
    let time = year + "-"+month

    let id = req.params.id

    return models.RegisterGoHomeOverNight.findAll({
        where:{
            AccountIdaccount : {
                [Op.like]: `${id}%`
            },
            dateout : {
                [Op.like]: `${time}%` 
            }
        },
        order: Sequelize.literal('dateout DESC'),
    }).then(list =>{
        res.json(list) 
    })
}
