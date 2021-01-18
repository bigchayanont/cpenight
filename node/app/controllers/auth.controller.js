const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

// const Role = db.role;

// const Op = db.Sequelize.Op;
const { validationResult } = require("express-validator");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let password = "";
  if (req.body.accountType === "EMAIL") {
    password = bcrypt.hashSync(req.body.password, 8);
  }
  // Save User to Database
  User.create({
    email: req.body.email,
    password: password,
    accountType: req.body.accountType,
    authId: req.body.authId,
    profilePic: req.body.profilePic,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nickName: req.body.nickName,
    birthday_day: req.body.birthday_day,
    birthday_month: req.body.birthday_month,
    birthday_year: req.body.birthday_year,
    classOf: req.body.classOf,
    phoneNumber: req.body.phoneNumber,
    line: req.body.line,
    facebookAccount: req.body.facebookAccount,
    organ: req.body.organ,
    role: req.body.role,
    field: req.body.field,
  })
    .then((user) => {
      res.send({ message: "User registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      if (user.accountType === "EMAIL") {
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }
      } else {
        if (req.body.authId != user.authId)
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
      }
      const payload = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
      };

      var token = jwt.sign(payload, config.secret, {
        expiresIn: 86400, // 24 hours
       // expiresIn: 5,
      });

      // var authorities = [];
      // user.getRoles().then((roles) => {
      //   for (let i = 0; i < roles.length; i++) {
      //     authorities.push("ROLE_" + roles[i].name.toUpperCase());
      //   }

      res.cookie("user", token, { httpOnly: true, maxAge: 900000 });

      res.status(200).send({
        token,
      });
      // res.status(200).send({
      //   id: user.id,
      //   email: user.email,
      //   password: user.password,
      //   accountType: user.accountType,
      //   authId:  user.authId,
      //   profilePic: user.profilePic,
      //   firstName: user.firstName,
      //   lastName: user.lastName,
      //   nickName: user.nickName,
      //   birthday_day: user.birthday_day,
      //   birthday_month: user.birthday_month,
      //   birthday_year: user.birthday_year,
      //   classOf: user.classOf,
      //   phoneNumber: user.phoneNumber,
      //   line: user.line,
      //   facebookAccount: user.facebookAccount,
      //   organ: user.organ,
      //   role: user.role,
      //   field: user.field,
      //   // roles: authorities,
      // });
      // });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.checkEmailExists = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(404).send({ message: "Email duplicate" });
    } else {
      res.status(200).send({ message: "Email is not duplicated" });
    }
  });
};
