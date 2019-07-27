let validator = require('validator');
var models  = require('../models');

const validateCreateUserFields = (errors, req) => {
    /* equal */
    if(!validator.equals(req.check, req.codecheck)){
        errors["check"] = {name: "check", value: "Mã kiểm tra không trùng khớp"}
    }

    /* check is email */
    if(!validator.isEmail(req.email)){
        errors["email"] = {name : "email", value:"Địa chỉ email không chính xác"}
    }

    /* check password */
    if(!validator.isLength(req.password, 6)){
        errors["password"] = {name : "password", value:"Mật khẩu tối thiểu phải có 6 ký tự"}
    }
    if(!validator.equals(req.passwordconfirm, req.password)){
        errors["passwordconfirm"] = {name: "passwordconfirm", value: "Mật khẩu xác nhận không trùng khớp"}
    }

    /* check is numberphone */
    if(!validator.isMobilePhone(req.phone, 'vi-VN')){
        errors["phone"] = {name : "phone", value:"Số điện thoại không hợp lệ"}
    }
    if(!validator.isMobilePhone(req.numberparent1, 'vi-VN')){
        errors["numberparent1"] = {name : "numberparent1", value:"Số điện thoại cha/mẹ không hợp lệ"}
    }
    if(!validator.isMobilePhone(req.numberparent2, 'vi-VN') && !validator.isEmpty(req.numberparent2)){
        errors["numberparent2"] = {name : "numberparent2", value:"Số điện thoại cha/mẹ không hợp lệ"}
    }


    // check empty
    if(validator.isEmpty(req.avatar)){
        errors["avatar"] = {name : "avatar", value:"Vui lòng chọn ảnh đại diện có ảnh cá nhân"}
    }
    if(validator.isEmpty(req.holyname)){
        errors["holyname"] = {name: "holyname", value: "Tên Thánh không được trống"}
    }
    if(validator.isEmpty(req.lastname)){
        errors["lastname"] = {name: "lastname", value: "Họ tên đệm không được trống"}
    }
    if(validator.isEmpty(req.firstname)){
        errors["firstname"] = {name: "firstname", value: "Tên không được trống"}
    }
    if(validator.isEmpty(req.phone)){
        errors["phone"] = {name: "phone", value: "Số điện thoại không được trống"}
    }
    if(validator.isEmpty(req.password)){
        errors["password"] = {name: "password", value: "Mật khẩu không được trống"}
    }
    if(validator.isEmpty(req.passwordconfirm)){
        errors["passwordconfirm"] = {name: "passwordconfirm", value: "Mật khẩu xác nhận không được để trống"}
    }
    if(validator.isEmpty(req.birth)){
        errors["birth"] = {name: "birth", value: "Ngày sinh không được để trống"}
    }
    if(validator.isEmpty(req.nativeland)){
        errors["nativeland"] = {name: "nativeland", value: "Quê quán không được trống"}
    }
    if(validator.isEmpty(req.email)){
        errors["email"] = {name: "email", value: "Email không được trống"}
    }
    if(validator.isEmpty(req.specialized)){
        errors["specialized"] = {name: "specialized", value: "Chuyên ngành không được trống"}
    }
    if(validator.isEmpty(req.fathername)){
        errors["fathername"] = {name: "fathername", value: "Họ tên cha không được trống"}
    }
    if(validator.isEmpty(req.mothername)){
        errors["mothername"] = {name: "mothername", value: "Họ tên mẹ không được trống"}
    }
    if(validator.isEmpty(req.numberparent1)){
        errors["numberparent1"] = {name: "numberparent1", value: "Số điện thoại cha/mẹ không được trống"}
    }
    if(validator.isEmpty(req.address)){
        errors["address"] = {name: "address", value: "Địa chỉ chi tiết không được trống"}
    }
    if(validator.isEmpty(req.check)){
        errors["check"] = {name: "check", value: "Mã kiểm tra không được trống"}
    }
}

exports.validateUser = function (errors, req){
    return new Promise(function(resolve, reject) {
        validateCreateUserFields(errors, req);
        /* check exists */
        models.Account.findOne({
            where:{
                phone: req.phone
            }
        }).then(phone => {
            if(phone !== null){
                errors["phone"] = {name: "phone", value: "Số điện thoại đã tồn tại"}
            }
            
        })
        return models.Account.findOne({
            where:{
                email: req.email
            }
        }).then(email=>{
            if(email !== null){
                errors["email"] = {name: "email", value: "Email đã tồn tại"}
            }
            resolve(errors);
        })
    })
}
