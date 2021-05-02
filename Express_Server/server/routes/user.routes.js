const UserController = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api", UserController.findAllUsers);
  app.post("/api/new", UserController.createNewUser);

};