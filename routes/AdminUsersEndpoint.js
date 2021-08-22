const Express = require("express");
const router = Express.Router();
const AuthenticateUser = require("./middleware/AuthenticateUser");
const AuthenticateAdminUser = require("../middleware/AuthenticateAdminUser");

router.get("/", AuthenticateUser, (request, response) => {
  //admin side
});
module.exports = {
  router,
};
