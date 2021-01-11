const { authJwt, auth } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  // app.get("/api/test/all", controller.allAccess);

  // not going to use
  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  // app.get(
  //   "/api/test/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );

  // app.get(
  //   "/api/test/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );

  app.get("/api/user", auth, controller.userInfo);

  app.post("/api/profile", auth, controller.userBoard);

  app.post("/api/edit", auth, controller.editData);

  app.post("/api/changePassword", auth, controller.changePassword);
};
