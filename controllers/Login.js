var models  = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const account = require("../models/account");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports.Login = (req, res) => {
  const { username, password } = req.body;
  models.Account.findOne(
    {
      where:{
        [Op.or]: [{ phone: username }, { email: username }],
        active: 1
      }  
    })
    .then((user) => { 
      if (user === null) {
        res.status(401).json({
          sucess: false,
          token: null,
          err: 'incorrect'
        });
      }
      // if exists account
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          let lastname = user.lastname+""
          lastname=lastname.split(" ");
          let token = jwt.sign(
            {
              username: user.idaccount,
              firstname: lastname[lastname.length-1] +" "+ user.firstname,
              typemember: user.typemember,
              roles: user.role,
            },
            'super secret',
            { expiresIn: 129600 }); // Signing the token 24h

          res.json({
            sucess: true,
            err: null,
            token
          });
        }
        else {
          console.log("Entered Password and Hash do not match!");
          res.status(401).json({
            sucess: false,
            token: null,
            err: 'Entered Password and Hash do not match!'
          });
        }
      });
    })
};

module.exports.JWTMV = (req, res) => {
  console.log("Web Token Checked.")
  res.send('You are authenticated'); //Sending some response when authenticated
};