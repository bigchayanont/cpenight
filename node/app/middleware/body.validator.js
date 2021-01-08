const { body } = require("express-validator");

const bodyValidation = () => {
  return [
    body("email").isEmail().normalizeEmail(),
    // body("password").isLength({ min: 8, max: 36 }).trim(),
    body("firstName").isLength({ max: 50 }).trim(),
    body("lastName").isLength({ max: 50 }).trim(),
    body("nickName").isLength({ max: 20 }).trim(),
    body("phoneNumber").isLength({ max: 10 }).trim(),
    body("line").isLength({ max: 50 }).trim(),
    body("facebookAccount").isLength({ max: 50 }).trim(),
    body("organ").isLength({ max: 50 }).trim(),
    body("role").isLength({ max: 50 }).trim(),
    body("field").isLength({ max: 50 }).trim(),
  ];
};

module.exports = bodyValidation;
