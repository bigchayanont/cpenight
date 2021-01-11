const authJwt = require("./authJwt");
const auth = require("./auth");
const bodyValidation = require("./body.validator");

module.exports = {
  authJwt,
  // verifySignUp,
  auth,
  bodyValidation,
};
