/* db postgres */
var models  = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moveFile = require('move-file');

const { isEmpty } = require('lodash');
const { validateUser } = require('../validators/Register')
const brcypt = require('bcrypt')


module.exports.register = async (req, res) => {
    /* get data from input user */
    const dataRegister = {
        idaccount: '',
        avatar: req.body.avatar,
        holyname: req.body.holyname,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        password: req.body.password,
        passwordconfirm: req.body.passwordconfirm,
        birth: req.body.birth,
        nativeland: req.body.nativeland,
        email: req.body.email,
        facebook: req.body.facebook,
        specialized: req.body.specialized,
        yearstudent: req.body.yearstudent,
        skill: req.body.skill,
        monthjoin: req.body.monthjoin,
        yearjoin: req.body.yearjoin,
        fathername: req.body.fathername,
        mothername: req.body.mothername,
        numberparent1: req.body.numberparent1,
        numberparent2: req.body.numberparent2,
        address: req.body.address,
        role: "0",
        typemember: req.body.oldmember ? 0 : 1, //0: oldmember, 1: currentmember
        active: req.body.oldmember ? 1 : 0, // if oldmember then active 1, currentmember is 0 ,
        DioceseId: req.body.iddiocese,
        DistrictIddistrict: req.body.iddistrict,
        HouseId: req.body.idhouse,
        ParishId: req.body.idparish,
        ProvinceIdprovince: req.body.idprovince,
        SchoolId: req.body.idschool,
        WardIdward: req.body.idward,
        check: req.body.check,
        codecheck: req.body.codecheck
    }

    let errors = {};
    return validateUser(errors, dataRegister).then(errors => {
        if (!isEmpty(errors)) {
            res.json({ errors: errors })
        } else { 
            console.log(dataRegister.phone)
            console.log(dataRegister.email)

            // Check if the email or phone already exists
            models.Account.findOne({
                where: {
                    [Op.or]: [{ phone: dataRegister.phone }, { email: dataRegister.email }]
                }
            }).then(async data => {
                if (data > 0) {
                    res.json({ errors: 'alreadyPhoneOrEmail' })
                } else{
                    let newIdAccount = ''
                    // get id account lastest depend on id house, month join, year join
                    await models.Account.findAll({
                        where: {
                            HouseId: dataRegister.HouseId,
                            monthjoin: dataRegister.monthjoin,
                            yearjoin: dataRegister.yearjoin
                        },
                        attributes: [[Sequelize.fn('MAX', Sequelize.col('idaccount')), 'idaccountlastest']],
                        raw: true,
                    }).then(data => {
                        console.log("tao id -------------------------------")
                        let idAccountLastest = JSON.stringify(data[0]["idaccountlastest"])

                        if (idAccountLastest === "null") {
                            // is new account if not found id lastest account based on idhouse, month join, year join
                            let yearJoin = (dataRegister.yearjoin + "").substr(2, 2)
                            let monthJosin = parseInt(dataRegister.monthjoin) < 10 ? "0" + dataRegister.monthjoin : dataRegister.monthjoin
                            newIdAccount = dataRegister.HouseId + yearJoin + monthJosin + "00"

                            dataRegister.idaccount = newIdAccount
                        } else {
                            // is next account if already id account based on idhouse, month join, year join
                            idAccountLastest = parseInt(idAccountLastest.replace(/"/g, ""))
                            newIdAccount = (idAccountLastest + 1).toString()

                            dataRegister.idaccount = newIdAccount
                        }
                    }).catch(errors => {
                        console.log("loi 1 -------------------------------")
                        res.json(errors)
                    })
                    // encrypt password
                    brcypt.hash(dataRegister.password, 10, async (errors, hash)=>{
                        if(errors){
                            console.log("loi 2 -------------------------------")
                            res.json(errors)
                        }
                        // move file img avater from uploads/tmp to uploads/accounts
                        await moveFile(`${__dirname}/../uploads/tmp/${dataRegister.avatar}`, `${__dirname}/../uploads/accounts/${dataRegister.avatar}`)

                        // convert password into encrypted password 
                        dataRegister.password = hash 
                        models.Account.create(dataRegister)
                        .then(
                            res.json({ success: "Đăng ký thành công, ID của bạn là: " + newIdAccount })       
                        )
                        .catch(errors => {
                            console.log("loi tao 5 ---- " + errors)
                            res.json(errors)
                        })
                    })
                }
            }).catch(errors => {
                console.log("loi 6 --- " + errors)
                res.json(errors)
            })
        }
    })
}