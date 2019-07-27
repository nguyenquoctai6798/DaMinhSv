var models  = require('../models');
let validator = require('validator');

exports.validateHouse = (errors, req) => {
    return new Promise(function(resolve, reject) {
        // check empty
        if(validator.isEmpty(req.username)){
            errors["username"] = {username : "username", value:"Vui lòng nhập số điện thoại hoặc địa chỉ email"}
        }
        if(validator.isEmpty(req.password)){
            errors["password"] = {name: "password", value: "Vui lòng nhập mật khẩu"}
        }
        resolve(errors);
    })
}

